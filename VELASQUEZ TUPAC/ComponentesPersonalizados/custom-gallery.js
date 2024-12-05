class Gallery extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });

        // Crear estilos
        this.estilo = document.createElement('style');
        this.estilo.textContent = `
        .gallery-container {
            display: flex;
            flex-direction: column; /* Asegura que las filas estén apiladas */
            align-items: center; /* Centra horizontalmente el contenido */
            gap: 1rem; /* Espaciado entre filas */
            padding: 1rem;
            background-color: #f5f5f5;
            width: 100%;
            box-sizing: border-box;
        }

        .gallery-row {
            display: flex;
            justify-content: center;
            gap: 1rem; /* Espaciado entre imágenes */
        }

        .gallery-row.large img {
            width: 150px; /* Tamaño más grande para imágenes en la fila superior */
            height: 150px;
            object-fit: cover;
            border-radius: 10px;
            cursor: pointer;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .gallery-row.small img {
            width: 100px; /* Tamaño más pequeño para imágenes en la fila inferior */
            height: 100px;
            object-fit: cover;
            border-radius: 10px;
            cursor: pointer;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        img:hover {
            transform: scale(1.1);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }
        `;

        // Crear contenedor
        this.galleryContainer = document.createElement('div');
        this.galleryContainer.classList.add('gallery-container');

        this.shadowRoot.appendChild(this.estilo);
        this.shadowRoot.appendChild(this.galleryContainer);
    }

    connectedCallback() {
        this.fetchImages();
    }

    async fetchImages() {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=12');
            const data = await response.json();
            const imageUrls = data.results.map(
                (pokemon) =>
                    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`
            );
            this.render(imageUrls);
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    }

    render(imageUrls) {
        this.galleryContainer.innerHTML = '';

        // Dividir imágenes en bloques de 6 (3 grandes arriba y 3 pequeñas abajo)
        for (let i = 0; i < imageUrls.length; i += 6) {
            const chunk = imageUrls.slice(i, i + 6);

            // Primera fila (imágenes grandes)
            const largeRow = document.createElement('div');
            largeRow.classList.add('gallery-row', 'large');
            chunk.slice(0, 3).forEach((url) => {
                const img = document.createElement('img');
                img.src = url;
                img.alt = 'Imagen de la galería';
                largeRow.appendChild(img);
            });

            // Segunda fila (imágenes pequeñas)
            const smallRow = document.createElement('div');
            smallRow.classList.add('gallery-row', 'small');
            chunk.slice(3).forEach((url) => {
                const img = document.createElement('img');
                img.src = url;
                img.alt = 'Imagen de la galería';
                smallRow.appendChild(img);
            });

            // Añadir filas al contenedor
            this.galleryContainer.appendChild(largeRow);
            this.galleryContainer.appendChild(smallRow);
        }
    }
}

window.customElements.define('custom-gallery', Gallery);
