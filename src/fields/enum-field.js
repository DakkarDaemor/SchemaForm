import { LitElement, html, css } from 'lit';

export class EnumField extends LitElement {
  static styles = css`
    .group { display: flex; flex-direction: column; gap: 0.4rem; }
    label { font-weight: 600; color: #333; font-size: 0.95rem; }
    select { padding: 0.6rem; border: 1px solid #ccc; border-radius: 6px; font-size: 1rem; background: white; cursor: pointer; }
    select:focus { border-color: #0076ff; outline: none; box-shadow: 0 0 0 2px rgba(0,118,255,0.2); }
    .required { color: #d32f2f; }
  `;

  static properties = {
    label: { type: String },
    value: { type: [String, Number, Boolean] },
    schema: { type: Object },
    required: { type: Boolean }
  };

  _handleChange(e) {
    const val = e.target.value;
    // Prova a parsificare come numero se possibile
    let parsedVal = val;
    if (!isNaN(val) && val !== '') {
      parsedVal = Number(val);
    } else if (val === 'true') {
      parsedVal = true;
    } else if (val === 'false') {
      parsedVal = false;
    }

    this.dispatchEvent(new CustomEvent('field-input', {
      detail: { value: parsedVal === '' ? null : parsedVal }
    }));
  }

  render() {
    const options = this.schema?.enum || [];
    
    return html`
      <div class="group">
        <label>
          ${this.label}
          ${this.required ? html`<span class="required">*</span>` : ''}
        </label>
        <select .value=${this.value ?? ''} @change=${this._handleChange}>
          <option value="">-- Seleziona --</option>
          ${options.map(opt => html`
            <option value=${opt} ?selected=${opt === this.value}>
              ${opt}
            </option>
          `)}
        </select>
      </div>
    `;
  }
}
customElements.define('enum-field', EnumField);
