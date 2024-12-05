class MainContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                main {
                    padding: 2rem;
                    font-family: 'Arial', sans-serif;
                    background: linear-gradient(180deg, #E3F2FD, #FFF9C4);
                    min-height: 500px;
                    border: 2px solid #FFAB40;
                    border-radius: 20px;
                    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
                }
                .main-content {
                    background: white;
                    padding: 2rem;
                    border-radius: 20px;
                    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
                }
                .welcome-message {
                    font-size: 2rem;
                    color: #FF6F00;
                    text-align: center;
                    font-weight: bold;
                    text-transform: uppercase;
                }
            </style>
            <main>
                <div class="main-content">
                    <p class="welcome-message">¡Bienvenido a la Aplicación Modular!</p>
                    <slot></slot> <!-- Aquí se inyectará el contenido dinámico -->
                </div>
            </main>
        `;
    }
}

window.customElements.define('main-container', MainContainer);
