class GalleryComponent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
        <style>
          .gallery-container {
            padding: 1rem;
            background: #2c3e50; /* Fondo oscuro */
            border-radius: 15px;
            text-align: center; /* Centrar título */
          }

          .gallery-title {
            font-size: 24px;
            font-weight: bold;
            color: #ecf0f1; /* Color del título */
            margin-bottom: 1rem; /* Espacio entre título y galería */
          }

          .gallery {
            display: grid;
            grid-template-columns: repeat(4, 1fr); /* 4 imágenes por fila */
            gap: 1.5rem; /* Más espacio entre las imágenes */
            padding: 1rem;
            justify-items: center;
            overflow: hidden;
          }

          img {
            width: 100%;
            height: 140px; /* Hacer las imágenes más pequeñas */
            object-fit: cover;
            border: 3px solid #ecf0f1; /* Borde blanco suave */
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          img:hover {
            transform: scale(1.1); /* Efecto de aumento en hover */
            box-shadow: 0 6px 10px rgba(0, 0, 0, 0.4);
          }
        </style>
        <div class="gallery-container">
          <div class="gallery-title">POKEMON</div>
          <div class="gallery"></div>
        </div>
        `;
    }

    connectedCallback() {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
            .then(response => response.json())
            .then(data => {
                const gallery = this.shadowRoot.querySelector('.gallery');
                // Limitar a 10 elementos, 4 por fila
                gallery.innerHTML = data.results.slice(0, 10).map((pokemon, index) => `
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png" alt="${pokemon.name}">
                `).join('');
            });
    }
}

window.customElements.define('mi-gallery', GalleryComponent);
