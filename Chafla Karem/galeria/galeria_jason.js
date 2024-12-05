class UserGallery extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });

        this.container = document.createElement('div');
        this.container.classList.add('user-gallery');

        this.estilo = document.createElement('style');
        this.estilo.textContent = `
            .user-gallery {
                display: flex;
                flex-wrap: wrap;
                gap: 16px;
                justify-content: center;
            }
            .gallery-item {
                text-align: center;
                border: 1px solid #ccc;
                border-radius: 8px;
                padding: 16px;
                width: 150px;
                background: #f9f9f9;
            }
            .gallery-item img {
                width: 100%;
                border-radius: 50%;
            }
            .error-alert {
                color: red;
                text-align: center;
            }
        `;

        this.template = document.createElement('template');
        this.template.innerHTML = `
            <div class="gallery-item">
                <img src="" alt="Avatar">
                <h3></h3>
                <p></p>
            </div>
        `;

        this.shadow.appendChild(this.estilo);
        this.shadow.appendChild(this.container);
    }

    connectedCallback() {
        const endPoint = this.getAttribute('api-endpoint');
        console.log('API endpoint:', endPoint); // URL actualizada en el HTML
        this.fetchData(endPoint);
    }

    fetchData = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            const users = data || [];
            this.render(users);
        } catch (error) {
            console.error('Error con la API:', error);
            this.container.innerHTML = `
                <p class="error-alert">Error al cargar los datos.</p>
            `;
        }
    };

    render = (users) => {
        this.container.innerHTML = "";
        users.forEach((u) => {
            const card = this.template.content.cloneNode(true);
            const img = card.querySelector('img');
            const name = card.querySelector('h3');
            const email = card.querySelector('p');

            img.src = "https://via.placeholder.com/150"; // Imagen genérica
            img.alt = `Imagen de ${u.name}`;
            name.textContent = u.name;
            email.textContent = u.email;

            this.container.appendChild(card);
        });
    };
}

window.customElements.define("galeria-json", UserGallery);
