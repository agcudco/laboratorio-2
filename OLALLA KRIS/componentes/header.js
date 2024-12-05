class CustomHeader extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
          header {
            background: #333;
            color: #fff;
            padding: 1rem;
            text-align: center;
          }
        </style>
        <header>
          <h1>LABORATORIO 2</h1>
        </header>
      `;
      shadow.appendChild(template.content.cloneNode(true));
    }
  }
  customElements.define('custom-header', CustomHeader);
  