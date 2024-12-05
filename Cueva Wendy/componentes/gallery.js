class GalleryComponent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                .gallery {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr); 
                    gap: 15px; 
                    justify-items: center; 
                    padding: 10px; 
                    background-color: #f5f5f5; 
                    border-radius: 8px; 
                }

                .gallery img {
                    width: 150px; 
                    height: 150px;
                    border: 3px solid #ccc; 
                    border-radius: 16px; 
                    object-fit: cover;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
                }

                .gallery img:hover {
                    transform: scale(1.1); 
                    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); 
                }
            </style>
            <div class="gallery"></div>
        `;
        shadow.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
            .then(response => response.json())
            .then(data => {
                const gallery = this.shadowRoot.querySelector('.gallery');
                data.results.forEach(pokemon => {
                    const img = document.createElement('img');
                    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`;
                    img.alt = pokemon.name; // Agrega un texto alternativo para cada imagen
                    gallery.appendChild(img);
                });
            });
    }
}

customElements.define('gallery-component', GalleryComponent);
