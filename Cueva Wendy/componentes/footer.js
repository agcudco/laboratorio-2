class FooterComponent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                footer {
                    text-align: center;
                    padding: 1em;
                    background: #333;
                    color: white;
                    position: relative; 
                    width: 100%;
                    height: 70px;
                }

                /* Estilos para el contenedor de la tabla */
                .container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

            </style>
            <div class="container">
                <div class="content">
                    <slot name="table"></slot> 
                </div>
                <footer>
                    <p>&copy; 2024 Laboratorio N2</p>
                </footer>
            </div>
        `;
        shadow.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('footer-component', FooterComponent);
