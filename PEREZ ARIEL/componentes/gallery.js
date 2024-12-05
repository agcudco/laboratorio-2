class GalleryComponent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                .gallery {
                    display: flex;
                    flex-wrap: wrap;
                }
                .gallery img {
                    width: 100px;
                    height: 100px;
                    margin: 5px;
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
                    gallery.appendChild(img);
                });
            });
    }
}

customElements.define('gallery-component', GalleryComponent);