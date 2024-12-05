class Galeria extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
        this.container = document.createElement('div');
        this.container.classList.add('mi-galeria');
        this.estilo = document.createElement('style');
        this.estilo.textContent = `
            .mi-galeria {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                gap: 15px;
                padding: 20px;
                background-color: #f9f9f9;
            }
            .mi-card {
                border: 1px solid #ccc;
                border-radius: 10px;
                overflow: hidden;
                text-align: center;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                background: #fff;
                transition: transform 0.2s ease-in-out;
            }
            .mi-card:hover {
                transform: scale(1.05);
            }
            .mi-card img {
                width: 100%;
                height: 150px;
                object-fit: cover;
            }
            .mi-card h3 {
                font-size: 1rem;
                margin: 10px 0;
            }
            .mi-card p {
                font-size: 0.9rem;
                margin: 5px 0;
                color: #555;
            }
        `;
        this.template = document.createElement('template');
        this.template.innerHTML = `
            <div class="mi-card">
                <img class="thumbnail" alt="Imagen de la galería">
                <h3 class="title">Título de la imagen</h3>
                <p class="album-id">Álbum ID</p>
            </div>
        `;

        this.shadow.appendChild(this.estilo);
        this.shadow.appendChild(this.container);
    }

    connectedCallback() {
        
        this.endpoint = this.getAttribute('api-endpoint') || 'https://picsum.photos/v2/list?page=1&limit=30';
        this.fetchData(this.endpoint);
    }

    async fetchData(url) {
        try {
            const response = await fetch(url);
            const data = await response.json();
            this.render(data);
        } catch (error) {
            console.error("Error al obtener los datos:", error);
            this.container.innerHTML = `<p class="error-alert">No se pudieron cargar las imágenes.</p>`;
        }
    }

    render(data) {
        this.container.innerHTML = '';
        data.forEach((item, index) => {
            const card = this.template.content.cloneNode(true);
            const thumbnail = card.querySelector('.thumbnail');
            const title = card.querySelector('.title');
            const albumId = card.querySelector('.album-id');

            // Asignar valores a los elementos
            thumbnail.src = item.download_url || item.url; // Asigna URL de imagen
            thumbnail.alt = `Imagen ${index + 1}`;
            title.textContent = `Imagen ${index + 1}`;
            albumId.textContent = `Fotografía por: ${item.author || 'Autor desconocido'}`;

            this.container.appendChild(card);
        });
    }
}

window.customElements.define('mi-galeria', Galeria);
