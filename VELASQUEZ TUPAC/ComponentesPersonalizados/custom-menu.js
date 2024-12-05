class CustomMenu extends HTMLElement {
    constructor() {
        super();

        this.shadow = this.attachShadow({ mode: 'open' });

        this.styleElement = document.createElement('style');
        this.styleElement.textContent = `
            .menu-container {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                background: linear-gradient(135deg, #2c3e50, #34495e);
                color: white;
                padding: 0.5rem 2rem;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); /* Sombra sutil para profundidad */
            }

            .menu-container ul {
                display: flex;
                padding: 0;
                margin: 0;
                list-style-type: none;
                gap: 1.5rem; /* Espaciado entre los elementos */
            }

            .menu-container li {
                padding: 0.8rem 1.5rem;
                font-size: 1rem;
                font-weight: bold;
                text-transform: uppercase;
                cursor: pointer;
                border-radius: 5px; /* Bordes redondeados */
                transition: background-color 0.3s ease, color 0.3s ease; /* Efecto de transición suave */
            }

            .menu-container li:hover {
                background-color: #e74c3c; /* Fondo rojo suave al pasar el ratón */
                color: white; /* Cambio de color de texto al pasar */
            }

            .logo {
                margin-right: 1.5rem;
                height: 50px; /* Ajusta el tamaño del logo */
                transition: transform 0.3s ease; /* Efecto suave para el logo */
            }

            .logo:hover {
                transform: scale(1.1); /* Aumenta ligeramente el logo al pasar */
            }
        `;

        // Contenedor principal
        this.menuContainer = document.createElement('div');
        this.menuContainer.classList.add('menu-container');

        // Imagen del logo (sin borde y sin borde redondeado)
        this.img = document.createElement('img');
        this.img.src = 'https://www.espe.edu.ec/wp-content/uploads/2023/03/espe.png';
        this.img.alt = 'Logo de la ESPE';
        this.img.classList.add('logo');
        this.menuContainer.appendChild(this.img);

        // Opciones del menú
        this.menuOptions = [
            { title: "INICIO", link: "index.html" },
            { title: "TABLA", link: "tabla.html" },
            { title: "GALERIA", link: "galeria.html" },
        ];

        // Crear lista de menú
        this.ul = document.createElement('ul');
        this.menuOptions.forEach(option => {
            const item = document.createElement('li');
            item.textContent = option.title;

            // Agregar evento click para redirigir
            item.addEventListener('click', () => {
                window.location.href = option.link;
            });

            this.ul.appendChild(item);
        });

        this.menuContainer.appendChild(this.ul);

        // Adjuntar estilos y contenido al Shadow DOM
        this.shadow.appendChild(this.styleElement);
        this.shadow.appendChild(this.menuContainer);
    }
}

// Definir el componente personalizado
window.customElements.define('custom-menu', CustomMenu);
