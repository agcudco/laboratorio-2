class CustomFooter extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
          footer {
            background: #333;
            color: #fff;
            text-align: center;
            padding: 1rem;
            position: fixed;
            bottom: 0;
            width: 100%;
          }
        </style>
        <footer>
          <p>© 2024 Todos los derechos reservados</p>
        </footer>
      `;
      shadow.appendChild(template.content.cloneNode(true));
    }
  }
  customElements.define('custom-footer', CustomFooter);
  