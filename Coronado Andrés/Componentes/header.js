class CustomHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' }); // Crear Shadow DOM
    }

    connectedCallback() {
        // Definir la estructura HTML del encabezado
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                .header-container {
                    background-color: #2c3e50; 
                    color: white;
                    text-align: center;
                    padding: 20px 0; 
                    font-size: 20px; /* Tamaño de fuente */
                    font-family: 'Times New Roman', Times, serif; /* Tipografía elegante */
                    letter-spacing: 1px;
                    border-bottom: 3px solid #ecf0f1; 
                    box-sizing: border-box;
                    margin-bottom: 3px; 
                }
                .header-container h1 {
                    margin: 0;
                    font-size: 36px;
                    font-weight: 600;
                }
            </style>
            <div class="header-container">
                <h1>Laboratorio 2</h1>
            </div>
        `;

        // Clonar el contenido del template y añadirlo al Shadow DOM
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

window.customElements.define("custom-header", CustomHeader);
