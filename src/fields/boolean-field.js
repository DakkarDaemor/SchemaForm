import { LitElement, html, css } from 'lit';

export class BooleanField extends LitElement {
  static styles = css`
    .group { display: flex; align-items: center; gap: 0.6rem; cursor: pointer; user-select: none; }
    label { font-weight: 600; color: #333; font-size: 0.95rem; cursor: pointer; }
    input { width: 1.2rem; height: 1.2rem; cursor: pointer; }
  `;

  static properties = {
    label: { type: String },
    value: { type: Boolean }
  };

  _handleChange(e) {
    this.dispatchEvent(new CustomEvent('field-input', {
      detail: { value: e.target.checked }
    }));
  }

  render() {
    return html`
      <div class="group">
        <input type="checkbox" id="chk" .checked=${!!this.value} @change=${this._handleChange}>
        <label for="chk">${this.label}</label>
      </div>
    `;
  }
}
customElements.define('boolean-field', BooleanField);