class FooterShadow extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: "open" });

        this.footerContainer = document.createElement("div");
        this.footerContainer.classList.add("footer-container");

        this.estilo = document.createElement("style");
        this.estilo.textContent = `
            .footer-container {
                position: fixed; /* Mantiene el footer fijo en la parte inferior */
                bottom: 0;
                left: 0;
                width: 100%; /* Ocupa todo el ancho de la página */
                background-color: #333; /* Fondo oscuro típico de un footer */
                color: white; /* Texto blanco */
                text-align: center; /* Centra el texto horizontalmente */
                padding: 1rem; /* Espaciado interno */
                font-size: 0.9rem; /* Tamaño de fuente discreto */
                box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2); /* Sombras para darle profundidad */
                padding-top: 1rem; /* Espaciado superior */
            }
        `;
        this.shadowRoot.appendChild(this.estilo);
        this.shadowRoot.appendChild(this.footerContainer);
    }

    connectedCallback() {
        this.render();
    }

    render = () => {
        this.footerContainer.textContent = `
            © 2024 Mi Empresa. Todos los derechos reservados. 
            Política de privacidad | Términos y condiciones | Contacto: soporte@miempresa.com
        `;
    }
}

window.customElements.define("footer-shadow", FooterShadow);
