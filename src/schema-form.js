import { LitElement, html, css } from 'lit';
import { unsafeStatic, html as staticHtml } from 'lit/static-html.js';
import { fieldRegistry } from './fields/registry.js';

// Importiamo i campi per assicurarci che vengano registrati nel browser
import './fields/string-field.js';
import './fields/number-field.js';
import './fields/boolean-field.js';
import './fields/object-field.js';
import './fields/array-field.js';
import './fields/enum-field.js';

export class SchemaForm extends LitElement {
  static styles = css`
    :host { display: block; font-family: system-ui, -apple-system, sans-serif; }
    form { display: flex; flex-direction: column; gap: 1.2rem; }
    .unsupported { color: #d32f2f; background: #ffebee; padding: 0.5rem; border-radius: 4px; }
  `;

  static properties = {
    schema: { type: Object },
    value: { type: Object }
  };

  constructor() {
    super();
    this.schema = {};
    this.value = {};
  }

  willUpdate(changedProperties) {
    if (this.schema?.properties) {
      const initialized = { ...this.value };
      for (const key of Object.keys(this.schema.properties)) {
        const prop = this.schema.properties[key];
        if (!(key in initialized)) {
          if (prop.default !== undefined) {
            initialized[key] = prop.default;
          } else if (prop.type === 'object') {
            initialized[key] = {};
          } else if (prop.type === 'array') {
            initialized[key] = [];
          } else {
            initialized[key] = undefined;
          }
        }
      }
      if (JSON.stringify(initialized) !== JSON.stringify(this.value)) {
        this.value = initialized;
      }
    }
  }

  _onFieldChange(key, e) {
    this.value = { ...this.value, [key]: e.detail.value };
    
    this.dispatchEvent(new CustomEvent('form-changed', {
      detail: { value: this.value },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    if (!this.schema || !this.schema.properties) {
      return html`<p>Incolla uno schema JSON valido per generare il form.</p>`;
    }

    return html`
      <form @submit=${(e) => e.preventDefault()}>
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
          const isRequired = this.schema.required?.includes(key);

          return staticHtml`
            <${tag}
                .label=${fieldSchema.title || key}
                .value=${fieldValue}
                .schema=${fieldSchema}
                .min=${fieldSchema.minimum}
                .max=${fieldSchema.maximum}
                .step=${step}
                .required=${isRequired}
                @field-input=${(e) => this._onFieldChange(key, e)}>
            </${tag}>
         `;
        })}
      </form>
    `;
  }
}
customElements.define('schema-form', SchemaForm);