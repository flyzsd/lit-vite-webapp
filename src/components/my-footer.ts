import { LitElement, html } from 'lit';
import { customElement, eventOptions, property } from 'lit/decorators.js';

@customElement('my-footer')
class MyFooter extends LitElement {
    @property()
    hostName = '';

    constructor() {
        super();
        this.addEventListener('click', (e: Event) => this.hostName = (e.target as Element).localName);
    }

    protected createRenderRoot() {
        return this;
    }

    protected render() {
        return html`
            <footer @change=${this._handleTouchStart}>footer</footer>
        `;
    }

    @eventOptions({ passive: true })
    private _handleTouchStart(e: Event) {
        console.log(e.type)
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'my-footer': MyFooter
    }
}
