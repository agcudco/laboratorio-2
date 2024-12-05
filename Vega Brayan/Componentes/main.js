class MainComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        main {
          padding: 2rem;
          font-family: 'Arial', sans-serif;
          background: linear-gradient(180deg, #E1F5FE, #FFF9C4);
          min-height: 500px;
          border: 3px dashed #FFAB40;
          border-radius: 15px;
        }
        .main-content {
          background: white;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06);
        }
        .welcome-message {
          font-size: 2rem;
          color: #FFAB40;
          text-align: center;
          text-transform: uppercase;
        }
      </style>
      <main>
        <div class="main-content">
          <slot>
          <p class="welcome-message">¡Bienvenido!</p>
          </slot>
        </div>
      </main>
    `;
  }
}

window.customElements.define('custom-main', MainComponent);
