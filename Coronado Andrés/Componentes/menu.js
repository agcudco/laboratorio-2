class CustomMenu extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' }); // Crear Shadow DOM
    }

    connectedCallback() {
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                .menu-container {
                    display: flex;
                    justify-content: space-around; /* Distribuir espacio equitativamente */
                    align-items: center;
                    background-color: #2c3e50;
                    padding: 0;
                    list-style: none;
                    margin: 0;
                    width: 100%;
                    height: 60px; /* Altura del menú */
                    box-sizing: border-box;
                }
                .menu-item {
                    flex: 1; /* Ocupar el mismo espacio cada opción */
                    text-align: center;
                    padding: 16px 0;
                    color: white;
                    cursor: pointer;
                    font-size: 18px;
                    font-weight: bold;
                    box-sizing: border-box;
                }
                .menu-item:hover {
                    background-color: #1abc9c;
                    color: black;
                }
            </style>
            <ul class="menu-container"></ul>
        `;

        this.shadowRoot.appendChild(template.content.cloneNode(true));

        // Opciones del menú
        const menuOptions = ["Perfil", "Tabla", "Galería"];
        const menuContainer = this.shadowRoot.querySelector('.menu-container');

        // Crear elementos del menú
        menuOptions.forEach(op => {
            const item = document.createElement("li");
            item.classList.add("menu-item");
            item.textContent = op;
            // Asignar el id "inicio" solo al primer elemento (Inicio)
            if (op === "Perfil") {
                item.id = "inicio";
            }
            // Asignar el id "tabla" solo a la opción "Tabla"
            if (op === "Tabla") {
                item.id = "tabla";
            }
            // Asignar el id "galeria" solo a la opción "Galería"
            if (op === "Galería") {
                item.id = "galeria";
            }
            menuContainer.appendChild(item);
        });

        // Agregar el evento de clic a los botones "Inicio,Tabla,Galería"
        this.shadowRoot.querySelector('#inicio').addEventListener('click', (event) => this.navigateToProfile(event));
        
        this.shadowRoot.querySelector('#tabla').addEventListener('click', (event) => this.navigateToTable(event));
        
        this.shadowRoot.querySelector('#galeria').addEventListener('click', (event) => this.navigateToGallery(event));
    }

    // Función para cambiar el contenido al perfil
    navigateToProfile(event) {
        event.preventDefault(); // Prevenir la acción predeterminada del enlace

        // Cambiar el contenido del custom-main para mostrar el perfil
        const mainContent = document.querySelector('custom-main');
        mainContent.innerHTML = '';  // Limpiar el contenido actual
        const profile = document.createElement('social-profile');
        mainContent.appendChild(profile);
    }

    // Función para cambiar el contenido a la tabla
    navigateToTable(event) {
        event.preventDefault(); // Prevenir la acción predeterminada del enlace

        // Cambiar el contenido del custom-main para mostrar la tabla
        const mainContent = document.querySelector('custom-main');
        mainContent.innerHTML = '';  // Limpiar el contenido actual
        const table = document.createElement('custom-table');
        mainContent.appendChild(table);
    }

    // Función para cambiar el contenido a la galería
    navigateToGallery(event) {
        event.preventDefault(); // Prevenir la acción predeterminada del enlace

        // Cambiar el contenido del custom-main para mostrar la galería
        const mainContent = document.querySelector('custom-main');
        mainContent.innerHTML = '';  // Limpiar el contenido actual
        const gallery = document.createElement('mi-gallery');
        mainContent.appendChild(gallery);
    }
}

window.customElements.define("mi-menu", CustomMenu);
