class HeaderComponent extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
      shadow.innerHTML = `
        <style>
          header {
            background: linear-gradient(90deg, #FF6F61, #FFA726);
            color: white;
            padding: 1.5rem;
            text-align: center;
            font-family: 'Arial', sans-serif;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            border-bottom: 5px solid #FFCC80;
          }
          h1 {
            margin: 0;
            font-size: 2.5rem;
            text-shadow: 2px 2px #FF7043;
          }
        </style>
        <header>
          <slot name="title">LABORATORIO 2 - INTEGRATIVA</slot>
        </header>
      `;
    }
  }
  window.customElements.define('custom-header', HeaderComponent);
  