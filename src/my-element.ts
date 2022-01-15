import { html, css, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { debounce } from 'lodash-es';

console.log(debounce);

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element')
export class MyElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;

  @state() 
  private end: number | null = null;

  /**
   * The name to say "Hello" to.
   */
  @property({ attribute: false })
  name = 'World';

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0;

  render() {
    console.log(import.meta.env);
    console.log('hello3');
    console.log(this.end);
    return html`
      <h1>Hello, ${this.name}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `
  }

  private _onClick() {
    this.count++;
  }

  foo(): string {
    return 'foo';
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
