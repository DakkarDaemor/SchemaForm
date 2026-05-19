import { LitElement, html, css } from 'lit';
import { unsafeStatic, html as staticHtml } from 'lit/static-html.js';
import { fieldRegistry } from './registry.js';
import './enum-field.js';

export class ObjectField extends LitElement {
  static styles = css`
    .group { display: flex; flex-direction: column; }
    .title { font-weight: 700; color: #1a1a1a; font-size: 1.05rem; padding: 0.8rem 0; border-bottom: 1px dotted #0076ff; }
    .fields-container { padding-left: 1rem; border-left: 1px dotted #0076ff; }
    .unsupported { color: #d32f2f; background: #ffebee; padding: 0.5rem; border-radius: 4px; }
  `;

  static properties = {
    label: { type: String },
    schema: { type: Object },
    value: { type: Object },
    required: { type: Boolean }
  };

  constructor() {
    super();
    this.value = {};
  }

  willUpdate(changedProperties) {
    // Se il valore non è un oggetto (es. undefined), lo inizializziamo come oggetto vuoto
    if (this.schema?.properties && (!this.value || typeof this.value !== 'object')) {
      this.value = {};
    }
    
    // Assicuriamo che tutte le proprietà dello schema abbiano un valore iniziale
    if (this.schema?.properties && this.value) {
      const initialized = { ...this.value };
      for (const key of Object.keys(this.schema.properties)) {
        if (!(key in initialized)) {
          initialized[key] = undefined;
        }
      }
      if (JSON.stringify(initialized) !== JSON.stringify(this.value)) {
        this.value = initialized;
      }
    }
  }

  _onFieldChange(key, e) {
    // Aggiornamento immutabile dello stato locale
    this.value = { ...this.value, [key]: e.detail.value };
    
    // Propagazione dell'evento verso il parent
    this.dispatchEvent(new CustomEvent('field-input', {
      detail: { value: this.value },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    if (!this.schema || !this.schema.properties) {
      return html`<div class="unsupported">Schema non valido per l'oggetto</div>`;
    }

    return html`
      <div class="group">
        <div class="title">${this.label}</div>
        <div class="fields-container">
          ${Object.entries(this.schema.properties).map(([key, fieldSchema]) => {
            let tagName;
            if (fieldSchema.enum) {
              tagName = 'enum-field';
            } else {
              const type = fieldSchema.type;
              tagName = fieldRegistry[type];
            }

            if (!tagName) {
              return html`<div class="unsupported">Tipo non supportato: <strong>${fieldSchema.type}</strong> per il campo <em>${key}</em></div>`;
            }

            const tag = unsafeStatic(tagName);
            const fieldValue = this.value[key];
            const step = fieldSchema.type === 'integer' ? 1 : undefined;

            return staticHtml`
              <${tag}
                  .label=${fieldSchema.title || key}
                  .value=${fieldValue}
                  .schema=${fieldSchema}
                  .min=${fieldSchema.minimum}
                  .max=${fieldSchema.maximum}
                  .step=${step}
                  .required=${this.schema.required?.includes(key)}
                  @field-input=${(e) => this._onFieldChange(key, e)}>
              </${tag}>
            `;
          })}
        </div>
      </div>
    `;
  }
}
customElements.define('object-field', ObjectField);
