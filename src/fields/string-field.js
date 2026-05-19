import { LitElement, html, css } from 'lit';

export class StringField extends LitElement {
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
    value: { type: String },
    schema: { type: Object },
    required: { type: Boolean }
  };

  constructor() {
    super();
    this.error = '';
  }

  _validateFormat(val) {
    if (!val || !this.schema?.format) return true;
    
    const format = this.schema.format;
    switch (format) {
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
      case 'uri':
      case 'url':
        try {
          new URL(val);
          return true;
        } catch {
          return false;
        }
      case 'uuid':
        return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(val);
      case 'date':
        return /^\d{4}-\d{2}-\d{2}$/.test(val) && !isNaN(Date.parse(val));
      case 'time':
        return /^\d{2}:\d{2}(?::\d{2})?(?:Z|[+-]\d{2}:\d{2})?$/.test(val);
      case 'date-time':
        return !isNaN(Date.parse(val));
      default:
        return true;
    }
  }

  _validateLength(val) {
    if (!val) return true;
    const minLength = this.schema?.minLength;
    const maxLength = this.schema?.maxLength;
    
    if (minLength && val.length < minLength) return false;
    if (maxLength && val.length > maxLength) return false;
    return true;
  }

  _handleInput(e) {
    const val = e.target.value;
    this.error = '';

    if (!this._validateLength(val)) {
      this.error = `Lunghezza tra ${this.schema.minLength || 0} e ${this.schema.maxLength || '∞'}`;
    } else if (!this._validateFormat(val)) {
      this.error = `Formato non valido: ${this.schema.format}`;
    }

    e.target.classList.toggle('error', !!this.error);

    this.dispatchEvent(new CustomEvent('field-input', {
      detail: { value: val, valid: !this.error }
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
          type="text" 
          .value=${this.value || ''} 
          @input=${this._handleInput}
          placeholder=${this.schema?.format ? `es. ${this._getFormatPlaceholder()}` : ''}
        >
        ${this.error ? html`<div class="error-message">${this.error}</div>` : ''}
      </div>
    `;
  }

  _getFormatPlaceholder() {
    const format = this.schema?.format;
    switch (format) {
      case 'email': return 'user@example.com';
      case 'uri': case 'url': return 'https://example.com';
      case 'uuid': return 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx';
      case 'date': return 'YYYY-MM-DD';
      case 'time': return 'HH:MM:SS';
      case 'date-time': return '2024-01-15T10:30:00Z';
      default: return '';
    }
  }
}
customElements.define('string-field', StringField);