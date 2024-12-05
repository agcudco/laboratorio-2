class FooterComponent extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
      shadow.innerHTML = `
        <style>
          footer {
            background: linear-gradient(90deg, #29B6F6, #0288D1);
            color: white;
            text-align: center;
            padding: 1rem;
            font-size: 1rem;
            font-family: 'Arial', sans-serif;
            border-top: 5px solid #B3E5FC;
          }
          footer span {
            display: inline-block;
            padding: 0.2rem 0.5rem;
            background: #03A9F4;
            border-radius: 5px;
            font-weight: bold;
          }
        </style>
        <footer>
          <span>&copy; 2024 Todos los derechos reservados</span>
        </footer>
      `;
    }
  }
  window.customElements.define('custom-footer', FooterComponent);
  