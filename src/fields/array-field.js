import { LitElement, html, css } from 'lit';
import { unsafeStatic, html as staticHtml } from 'lit/static-html.js';
import { fieldRegistry } from './registry.js';
import './enum-field.js';

export class ArrayField extends LitElement {
  static styles = css`
    .group { display: flex; flex-direction: column; }
    .title { font-weight: 700; color: #1a1a1a; font-size: 1.05rem; padding: 0.8rem 0; border-bottom: 1px dotted #0076ff; }
    .array-container { padding-left: 1rem; border-left: 1px dotted #0076ff; }
    .array-item { 
      display: flex; 
      align-items: flex-start; 
      gap: 0.5rem; 
      margin: 0.8rem 0;
      padding: 0.8rem;
      background: #f5f5f5;
      border-radius: 4px;
    }
    .item-content { flex: 1; }
    .item-index { 
      font-weight: 600; 
      color: #666; 
      min-width: 2rem;
      padding-top: 0.6rem;
    }
    .remove-btn {
      padding: 0.4rem 0.8rem;
      background: #d32f2f;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.9rem;
      min-height: 2.4rem;
      display: flex;
      align-items: center;
    }
    .remove-btn:hover { background: #c62828; }
    .add-btn {
      padding: 0.6rem 1rem;
      background: #0076ff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.95rem;
      font-weight: 600;
    }
    .add-btn:hover { background: #0056b3; }
    .unsupported { color: #d32f2f; background: #ffebee; padding: 0.5rem; border-radius: 4px; }
    .empty-message { color: #999; font-style: italic; padding: 0.5rem 0; }
  `;

  static properties = {
    label: { type: String },
    schema: { type: Object },
    value: { type: Array },
    required: { type: Boolean }
  };

  constructor() {
    super();
    this.value = [];
    this.error = '';
  }

  willUpdate(changedProperties) {
    if (!Array.isArray(this.value)) {
      this.value = [];
    }
  }

  _validateLength(arr) {
    const minItems = this.schema?.minItems;
    const maxItems = this.schema?.maxItems;
    
    if (minItems && arr.length < minItems) {
      return `Minimo ${minItems} elemento/i`;
    }
    if (maxItems && arr.length > maxItems) {
      return `Massimo ${maxItems} elemento/i`;
    }
    return '';
  }

  _onFieldChange(index, e) {
    const updated = [...this.value];
    updated[index] = e.detail.value;
    this.value = updated;
    
    this.dispatchEvent(new CustomEvent('field-input', {
      detail: { value: this.value },
      bubbles: true,
      composed: true
    }));
  }

  _removeItem(index) {
    const updated = this.value.filter((_, i) => i !== index);
    this.value = updated;
    this.error = this._validateLength(this.value);
    this.dispatchEvent(new CustomEvent('field-input', {
      detail: { value: this.value },
      bubbles: true,
      composed: true
    }));
  }

  _addItem() {
    if (this.schema?.maxItems && this.value.length >= this.schema.maxItems) {
      this.error = `Massimo ${this.schema.maxItems} elemento/i`;
      return;
    }
    
    const itemSchema = this.schema?.items;
    let newItem = undefined;

    if (itemSchema) {
      switch (itemSchema.type) {
        case 'string':
          newItem = '';
          break;
        case 'number':
        case 'integer':
          newItem = 0;
          break;
        case 'boolean':
          newItem = false;
          break;
        case 'object':
          newItem = {};
          break;
        case 'array':
          newItem = [];
          break;
      }
    }

    this.value = [...this.value, newItem];
    this.error = this._validateLength(this.value);
    this.dispatchEvent(new CustomEvent('field-input', {
      detail: { value: this.value },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    if (!this.schema || !this.schema.items) {
      return html`<div class="unsupported">Schema non valido per l'array</div>`;
    }

    const itemSchema = this.schema.items;
    let tagName;
    if (itemSchema.enum) {
      tagName = 'enum-field';
    } else {
      const type = itemSchema.type;
      tagName = fieldRegistry[type];
    }

    if (!tagName) {
      return html`<div class="unsupported">Tipo non supportato per gli elementi dell'array: <strong>${itemSchema.type}</strong></div>`;
    }

    return html`
      <div class="group">
        <div class="title">
          ${this.label}
          ${this.required ? html`<span style="color: #d32f2f;">*</span>` : ''}
        </div>
        ${this.error ? html`<div style="color: #d32f2f; background: #ffebee; padding: 0.5rem; border-radius: 4px; margin: 0.5rem 0;">${this.error}</div>` : ''}
        <div class="array-container">
          ${this.value.length === 0 
            ? html`<div class="empty-message">Nessun elemento</div>` 
            : html`
              ${this.value.map((item, index) => {
                const tag = unsafeStatic(tagName);
                const step = itemSchema.type === 'integer' ? 1 : undefined;

                return staticHtml`
                  <div class="array-item">
                    <div class="item-index">[${index}]</div>
                    <div class="item-content">
                      <${tag}
                        .label=${itemSchema.title || `Elemento ${index}`}
                        .value=${item}
                        .schema=${itemSchema}
                        .min=${itemSchema.minimum}
                        .max=${itemSchema.maximum}
                        .step=${step}
                        @field-input=${(e) => this._onFieldChange(index, e)}>
                      </${tag}>
                    </div>
                    <button class="remove-btn" @click=${() => this._removeItem(index)}>Rimuovi</button>
                  </div>
                `;
              })}
            `}
          <button class="add-btn" @click=${() => this._addItem()}>+ Aggiungi elemento</button>
        </div>
      </div>
    `;
  }
}
customElements.define('array-field', ArrayField);
