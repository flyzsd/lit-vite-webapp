import { LitElement, html, css } from 'lit';
import { customElement, query, queryAll } from 'lit/decorators.js';
import { buttonStyles } from '../assets/button-style.js';

@customElement('my-header')
class MyHeader extends LitElement {

    @query('header')
    _header!: HTMLHeadElement;

    @queryAll('div')
    _divs!: NodeListOf<HTMLElement>;

    static styles = [
        buttonStyles,
        css`
            :host { 
                display: block;
                border: 1px solid black;
                font-family: Roboto;
            }
            :host(.blue) {
                background-color: aliceblue;
                color: darkgreen;
            }
            div::before {
                content: '\u2022';
            }
        `
    ];

    render() {
        return html`
            <header>header</header>
            <div>hello</div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'my-header': MyHeader
    }
}