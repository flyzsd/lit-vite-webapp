import {LitElement, html, PropertyValues} from 'lit';
import {customElement, property} from 'lit/decorators.js';

import './my-header.js';
import './my-article.js';
import './my-footer.js';

@customElement('my-page')
class MyPage extends LitElement {

  private _prop = 0;

  set prop(val: number) {
    let oldVal = this._prop;
    this._prop = Math.floor(val);
    this.requestUpdate('prop', oldVal);
  }
  
  @property({type: Number})
  get prop() { return this._prop; }

  connectedCallback() {
    super.connectedCallback()
    window.addEventListener('keydown', this._handleKeydown);
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    window.removeEventListener('keydown', this._handleKeydown);
  }

  _handleKeydown = () => {
      console.log(this.isConnected);
  }

  willUpdate(changedProperties: PropertyValues) {
    // only need to check changed properties for an expensive computation.
    if (changedProperties.has('firstName') || changedProperties.has('lastName')) {
      //Implement willUpdate() to compute property values that depend on other properties and are used in the rest of the update process.
    }
  }

  render() {
    return html`
      ${this.prop}
      <my-header class="blue"></my-header>
      <my-article></my-article>
      <my-footer></my-footer>
    `;
  }
}

declare global {
    interface HTMLElementTagNameMap {
        'my-page': MyPage
    }
}