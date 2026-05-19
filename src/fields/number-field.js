import { LitElement, html, css } from 'lit';

export class NumberField extends LitElement {
  static styles = css`
    .group { display: flex; flex-direction: column; gap: 0.4rem; }
    label { font-weight: 600; color: #333; font-size: 0.95rem; }
    input { padding: 0.6rem; border: 1px solid #ccc; border-radius: 6px; font-size: 1rem; }
    input:focus { border-color: #0076ff; outline: none; box-shadow: 0 0 0 2px rgba(0,118,255,0.2); }
    input.error { border-color: #d32f2f; background: #ffebee; }
    .error-message { color: #d32f2f; font-size: 0.85rem; margin-top: 0.2rem; }
    .required { color: #d32f2f; }
  `;

  static properties = {
    label: { type: String },
    value: { type: Number },
    min: { type: Number },
    max: { type: Number },
    step: { type: Number },
    schema: { type: Object },
    required: { type: Boolean }
  };

  constructor() {
    super();
    this.error = '';
  }

  _validateMultipleOf(val) {
    if (val === null || val === undefined || !this.schema?.multipleOf) return true;
    const multipleOf = this.schema.multipleOf;
    return (val / multipleOf) % 1 === 0;
  }

  _handleInput(e) {
    const val = e.target.valueAsNumber;
    this.error = '';
    
    if (!isNaN(val) && !this._validateMultipleOf(val)) {
      this.error = `Deve essere un multiplo di ${this.schema.multipleOf}`;
      e.target.classList.add('error');
    } else {
      e.target.classList.remove('error');
    }

    this.dispatchEvent(new CustomEvent('field-input', {
      detail: { value: isNaN(val) ? null : val, valid: !this.error }
    }));
  }

  render() {
    return html`
      <div class="group">
        <label>
          ${this.label}
          ${this.required ? html`<span class="required">*</span>` : ''}
        </label>
        <input 
          type="number" 
          .value=${this.value ?? ''} 
          min=${this.min ?? ''} 
          max=${this.max ?? ''} 
          step=${this.step ?? 'any'}
          @input=${this._handleInput}
        >
        ${this.error ? html`<div class="error-message">${this.error}</div>` : ''}
      </div>
    `;
  }
}
customElements.define('number-field', NumberField);