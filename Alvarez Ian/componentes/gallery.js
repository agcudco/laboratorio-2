class Gallery extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.limit = 16; // Número inicial de Pokémon a mostrar
        this.offset = 0; // Controla el punto de inicio en la API
        this.shadowRoot.innerHTML = `
            <style>
                .gallery-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .gallery {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
                    gap: 1rem;
                    padding: 1rem;
                    background-color: #f5f5f5;
                    border-radius: 15px;
                    width: 100%;
                }

                .add-more {
                    margin: 1rem;
                    padding: 10px 20px;
                    font-size: 1.2rem;
                    background-color: #4CAF50;
                    color: white;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }

                .add-more:hover {
                    background-color: #45A049;
                }

                img {
                    width: 100%;
                    height: 120px;
                    object-fit: cover;
                    border: 3px solid white;
                    border-radius: 10px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                img:hover {
                    transform: scale(1.1);
                    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.4);
                }
            </style>
            <div class="gallery-container">
                <div class="gallery"></div>
                <button class="add-more">+</button>
            </div>
        `;
    }

    connectedCallback() {
        this.loadPokemon(); // Cargar los Pokémon iniciales
        this.shadowRoot.querySelector('.add-more').addEventListener('click', () => this.addPokemon());
    }

    loadPokemon() {
        fetch(`https://pokeapi.co/api/v2/pokemon?offset=${this.offset}&limit=${this.limit}`)
            .then(response => response.json())
            .then(data => {
                const gallery = this.shadowRoot.querySelector('.gallery');
                gallery.innerHTML += data.results.map((pokemon) => {
                    const id = pokemon.url.split('/').filter(Boolean).pop(); // Extrae el ID del Pokémon
                    return `
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png" alt="${pokemon.name}">
                    `;
                }).join('');
                this.offset += this.limit; // Actualiza el offset para el próximo conjunto de Pokémon
            })
            .catch(error => {
                console.error("Error al cargar la galería de Pokémon:", error);
            });
    }

    addPokemon() {
        this.loadPokemon(); // Carga más Pokémon al hacer clic en el botón
    }
}

customElements.define('my-gallery', Gallery);
