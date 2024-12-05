class Miapi extends HTMLElement {
    constructor() {
        super();

        this.shadow = this.attachShadow({ mode: 'open' });
        this.container = document.createElement('div');
        this.container.classList.add('container');
        this.estilo = document.createElement('style');
        this.estilo.innerHTML = `
            .container {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
            }
            .card {
                border: 1px solid #ccc;
                border-radius: 8px;
                overflow: hidden;
                text-align: center;
                background: #f9f9f9;
                width: 200px;
                margin: 10px;
                padding: 10px;
            }
            .card img {
                width: 100%;
                height: auto;
            }
        `;

        this.template = document.createElement('template');
        this.template.innerHTML = `
            <div class="card">
                <img src="" alt="Image" />
                <h3></h3>
                <p></p>
            </div>
        `;

        this.shadow.appendChild(this.estilo);
        this.shadow.appendChild(this.container);

        this.etag = null; // Variable para almacenar el ETag
    }

    connectedCallback() {
        this.fetchData();
    }

    async fetchData() {
        const publicKey = '59108729673c259e5760a5aa41a84909';
        const privateKey = '19e615e0b2d532c9255010c54695511542d01d0e';
        const timestamp = new Date().getTime();
        const hash = CryptoJS.MD5(`${timestamp}${privateKey}${publicKey}`).toString();

        const url = `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
        const headers = {};

        if (this.etag) {
            // Si ya se tiene un ETag, envía el encabezado If-None-Match
            headers['If-None-Match'] = this.etag;
        }

        try {
            const response = await fetch(url, { headers });

            if (response.status === 304) {
                console.log("Los datos no han cambiado desde la última solicitud.");
                return; // No hay necesidad de volver a renderizar los datos
            }

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            // Guarda el nuevo ETag recibido en la respuesta
            this.etag = response.headers.get('ETag');
            const data = await response.json();

            this.render(data.data.results); // Procesa el array de resultados
        } catch (error) {
            console.error("Error al obtener los datos:", error);
            this.container.innerHTML = `<p class="error-alert">No se pudo conectar a la API.</p>`;
        }
    }

    render(characters) {
        this.container.innerHTML = ''; // Limpia la galería antes de renderizar
        characters.forEach(character => {
            const card = this.template.content.cloneNode(true);
            card.querySelector('img').src = `${character.thumbnail.path}.${character.thumbnail.extension}`;
            card.querySelector('img').alt = character.name;
            card.querySelector('h3').textContent = character.name;
            card.querySelector('p').textContent = character.description || 'No hay descripción disponible.';
            this.container.appendChild(card);
        });
    }
}

window.customElements.define('mi-api', Miapi);
