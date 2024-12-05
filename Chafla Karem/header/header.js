class AppHeader extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });

        // Crear contenedor del header
        this.headerContainer = document.createElement('header');
        this.headerContainer.classList.add('app-header');

        // Crear estilos
        this.styles = document.createElement('style');
        this.styles.textContent = `
            .app-header {
                display: flex;
                justify-content: center; /* Centrar horizontalmente */
                align-items: center; /* Alinear verticalmente */
                padding: 16px;
                background-color: #FFA561;
                color: white;
                font-family: Arial, sans-serif;
                text-align: center; /* Asegurar que el texto esté centrado */
            }
            .logo {
                font-size: 1.5em;
                font-weight: bold;
            }
        `;

        // Crear contenido del header
        this.headerContainer.innerHTML = `
            <div class="logo">Bienvenido</div>
        `;

        // Añadir estilos y contenedor al shadow DOM
        this.shadow.appendChild(this.styles);
        this.shadow.appendChild(this.headerContainer);
    }
}

// Registrar el custom element
window.customElements.define('app-header', AppHeader);
