class Gallery extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });

        this.estilo = document.createElement("style");
        this.estilo.textContent = `
            .gallery-container {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                gap: 20px;
                padding: 20px;
                background-color: #f5f5f5;
            }

            .gallery-item {
                background-color: #fff;
                border-radius: 8px;
                overflow: hidden;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                transition: transform 0.3s;
            }

            .gallery-item:hover {
                transform: scale(1.05);
            }

            .gallery-image {
                width: 100%;
                height: 250px;
                object-fit: cover;
                border-bottom: 2px solid #ddd;
            }

            .gallery-title {
                padding: 10px;
                text-align: center;
                font-size: 1.2rem;
                font-weight: bold;
                color: #333;
            }

            .loading {
                text-align: center;
                padding: 20px;
                font-size: 1.2rem;
            }
        `;

        this.template = document.createElement('template');
        this.template.innerHTML = `
            <div class="gallery-container">
                <div class="loading">Loading gallery...</div>
            </div>
        `;

        this.shadow.appendChild(this.estilo);
        this.shadow.appendChild(this.template.content.cloneNode(true));

        this.loadImages();
    }

    async loadImages() {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
            const data = await response.json();
            const galleryContainer = this.shadowRoot.querySelector('.gallery-container');
            galleryContainer.innerHTML = ''; 

            data.results.forEach(async (pokemon) => {
                const pokemonResponse = await fetch(pokemon.url);
                const pokemonData = await pokemonResponse.json();
                const imageUrl = pokemonData.sprites.front_default;
                const item = document.createElement('div');
                item.classList.add('gallery-item');

                item.innerHTML = `
                    <img src="${imageUrl}" alt="${pokemon.name}" class="gallery-image" />
                    <div class="gallery-title">${pokemon.name}</div>
                `;

                galleryContainer.appendChild(item);
            });
        } catch (error) {
            console.error('Error fetching data:', error);
            const galleryContainer = this.shadowRoot.querySelector('.gallery-container');
            galleryContainer.innerHTML = '<div class="loading">Failed to load images.</div>';
        }
    }
}

window.customElements.define('custom-gallery', Gallery);
