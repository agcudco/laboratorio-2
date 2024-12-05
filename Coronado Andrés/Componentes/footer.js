class CustomFooter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' }); // Crear Shadow DOM
    }

    connectedCallback() {
        // Definir la estructura HTML del footer
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                .footer-container {
                    background-color: #2c3e50;
                    color: white;
                    text-align: center;
                    padding: 20px 0;
                    font-size: 14px;
                    position: fixed;
                    bottom: 0;
                    width: 100%;
                    box-sizing: border-box;
                }
                .footer-container p {
                    margin: 0;
                }
                .footer-container a {
                    color: #1abc9c;
                    text-decoration: none;
                    margin: 0 5px;
                }
                .footer-container a:hover {
                    text-decoration: underline;
                }
            </style>
            <div class="footer-container">
                <p>© ${new Date().getFullYear()} Mi Aplicación Web. Todos los derechos reservados.</p>
            </div>
        `;

        // Clonar el contenido del template y añadirlo al Shadow DOM
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

window.customElements.define("custom-footer", CustomFooter);
