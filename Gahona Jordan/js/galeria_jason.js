class MigaleriaJson extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
        this.container = document.createElement('div');
        this.container.classList.add('mi-galeria-json');
        this.estilo = document.createElement('style');
        this.estilo.textContent = `
            .mi-galeria-json {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                gap: 10px;
                padding: 20px;
            }
            .mi-card {
                border: 1px solid #ccc;
                border-radius: 8px;
                overflow: hidden;
                text-align: center;
                background: #f9f9f9;
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
                <img class="thumbnail" alt="Thumbnail">
                <h3 class="album-id">Album ID</h3>
                <p class="photo-id">Photo ID</p>
                <p class="title">Title</p>
            </div>
        `;

        this.shadow.appendChild(this.estilo);
        this.shadow.appendChild(this.container);
    }

    connectedCallback() {
        this.endpoint = this.getAttribute('api-endpoint');
        if (this.endpoint) {
            this.fetchData(this.endpoint);
        }
    }

    fetchData = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            this.render(data);
        } catch (error) {
            console.error("Error fetching data", error);
            this.container.innerHTML = `<p class="error-alert">Error fetching data</p>`;
        }
    };

    render = (albums) => {
        this.container.innerHTML = '';
        albums.forEach(a => {
            const card = this.template.content.cloneNode(true);
            const thumbnail = card.querySelector('.thumbnail');
            const albumId = card.querySelector('.album-id');
            const photoId = card.querySelector('.photo-id');
            const title = card.querySelector('.title');

            thumbnail.src = a.thumbnailUrl;
            thumbnail.alt = a.title;
            albumId.textContent = `Album ID: ${a.albumId}`;
            photoId.textContent = `Photo ID: ${a.id}`;
            title.textContent = a.title;

            this.container.appendChild(card);
        });
    };
}

window.customElements.define('galeria-json', MigaleriaJson);
