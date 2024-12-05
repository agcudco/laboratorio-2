class MenuComponent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                nav {
                    display: flex;
                    justify-content: center; 
                    align-items: center;    
                    background: #333;
                    color: white;
                    padding: 1em;
                    width: 100%;
                    box-sizing: border-box; 
                }

                /* Estilo de los enlaces */
                a {
                    color: white;
                    margin: 0 1em;
                    text-decoration: none;
                    cursor: pointer;
                    font-size: 1.2em;
                    text-align: center;
                    padding: 0.5em 1em;
                    border-radius: 8px; 
                    transition: background-color 0.3s ease, color 0.3s ease, border-radius 0.3s ease;
                }

                a:hover {
                    background-color: white;
                    color: #333;
                    border-radius: 16px; 
                }
            </style>
            <nav>
                <a id="home-link">Inicio</a>
                <a id="profile-link">Perfil</a>
                <a id="table-link">Tabla</a>
                <a id="gallery-link">Galeria</a>
            </nav>
        `;
        shadow.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        this.shadowRoot.querySelector('#home-link').addEventListener('click', () => this.navigate('home'));
        this.shadowRoot.querySelector('#profile-link').addEventListener('click', () => this.navigate('profile'));
        this.shadowRoot.querySelector('#table-link').addEventListener('click', () => this.navigate('table'));
        this.shadowRoot.querySelector('#gallery-link').addEventListener('click', () => this.navigate('gallery'));
    }

    navigate(page) {
        const mainComponent = document.querySelector('main-component');
        mainComponent.innerHTML = ''; // Limpiar el contenido actual

        switch (page) {
            case 'home':
                mainComponent.innerHTML = '<home-component></home-component>';
                break;
            case 'profile':
                mainComponent.innerHTML = '<social-profile></social-profile>';
                break;
            case 'table':
                mainComponent.innerHTML = '<custom-table></custom-table>';
                break;
            case 'gallery':
                mainComponent.innerHTML = '<gallery-component></gallery-component>';
                break;
        }
    }
}

customElements.define('menu-component', MenuComponent);
