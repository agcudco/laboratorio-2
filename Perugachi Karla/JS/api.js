class Api extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 20px;
                    justify-content: center;
                    padding: 20px;
                    background-color: #1e1e1e;
                    color: #ffffff;
                    font-family: Arial, sans-serif;
                }
                .card {
                    background-color: #2d2d2d;
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    width: 300px;
                }
                .card img {
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                }
                .card-content {
                    padding: 15px;
                }
                .card-content h2 {
                    margin: 0;
                    font-size: 20px;
                }
                .card-content p {
                    margin: 5px 0;
                    font-size: 14px;
                }
                .status {
                    display: inline-block;
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    margin-right: 5px;
                }
                .status.alive {
                    background-color: #4caf50;
                }
                .status.dead {
                    background-color: #f44336;
                }
                .status.unknown {
                    background-color: #9e9e9e;
                }
            </style>
            <div id="cards-container"></div>
        `;
    }

    connectedCallback() {
        this.loadCharacters();
    }

    async loadCharacters() {
        const container = this.shadowRoot.querySelector('#cards-container');

        try {
            const response = await fetch('https://rickandmortyapi.com/api/character');
            const data = await response.json();

            data.results.forEach(character => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <img src="${character.image}" alt="${character.name}">
                    <div class="card-content">
                        <h2>${character.name}</h2>
                        <p><span class="status ${character.status.toLowerCase()}"></span>${character.status} - ${character.species}</p>
                        <p>Última ubicación conocida: ${character.location.name}</p>
                        <p>Visto por primera vez en: ${character.origin.name}</p>
                    </div>
                `;
                container.appendChild(card);
            });
        } catch (error) {
            console.error('Error al cargar los datos:', error);
            container.innerHTML = `<p style="color: red;">Error al cargar los datos de la API.</p>`;
        }
    }
}

// Definir el Custom Element
customElements.define('mi-api', Api);
