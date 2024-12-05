class MenuShadow extends HTMLElement {
    constructor() {
        super();

        // Crear Shadow DOM
        const shadow = this.attachShadow({ mode: 'open' });

        // Crear Template
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                .menu-container {
                    display: flex;
                    justify-content: center;
                    background: linear-gradient(90deg, #AB47BC, #8E24AA);
                    padding: 1rem;
                    border-radius: 8px;
                    list-style: none;
                    margin: 0;
                    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
                }

                .menu-container li {
                    padding: 16px 30px;
                    cursor: pointer;
                    transition: background-color 0.3s ease, transform 0.3s ease;
                    text-align: center;
                }

                .menu-container li:hover {
                    background-color: #FFEB3B;
                    color: black;
                    transform: translateY(-3px);
                }

                .menu-container a {
                    color: white;
                    text-decoration: none;
                    font-weight: bold;
                    font-size: 1.2rem;
                    transition: all 0.3s ease;
                }

                .menu-container a:hover {
                    text-shadow: 0 0 5px #FFEB3B;
                }
            </style>
            <ul class="menu-container">
                <li><a href="#" data-page="social-profile">PERFIL</a></li>
                <li><a href="#" data-page="custom-table">TABLA</a></li>
                <li><a href="#" data-page="my-gallery">GALERÍA</a></li>
            </ul>
        `;

        // Clonar el contenido del template
        shadow.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        // Manejar el clic en los enlaces para cargar las páginas correspondientes
        this.shadowRoot.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault();  // Evitar que se recargue la página
                const page = link.getAttribute('data-page');  // Obtener el valor de 'data-page'
                const mainContent = document.querySelector('main-container');
                this.renderPage(page, mainContent);
            });
        });
    }

    renderPage(page, container) {
        // Limpiar el contenedor antes de insertar un nuevo componente
        container.innerHTML = "";

        // Dependiendo de la opción seleccionada, inyectar el componente correspondiente
        switch(page) {
            case 'social-profile':
                container.innerHTML = "<social-profile></social-profile>";
                break;
            case 'custom-table':
                container.innerHTML = "<custom-table api-endpoint='https://jsonplaceholder.typicode.com/users'></custom-table>";
                break;
                case 'my-gallery':
                    container.innerHTML = "<my-gallery></my-gallery>";
                    break;
                
            default:
                container.innerHTML = "<p>Opción no válida.</p>";
                break;
        }
    }
}

customElements.define('menu-shadow', MenuShadow);