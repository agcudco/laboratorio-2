class GalleryComponent extends HTMLElement { 
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        .gallery {
          display: grid;
          grid-template-columns: repeat(3, minmax(150px, 1fr)); 
          gap: 1rem;
          padding: 1rem;
          background: linear-gradient(90deg, #FFC107, #FF9800);
          border-radius: 15px;
        }
        img {
          width: 200px;
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
      <div class="gallery"></div>
    `;
  }

  connectedCallback() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=90') 
      .then(response => response.json())
      .then(data => {
        const gallery = this.shadowRoot.querySelector('.gallery');
        gallery.innerHTML = data.results.map((pokemon, index) => `
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png" alt="${pokemon.name}">
        `).join('');
      });
  }
}

window.customElements.define('gallery-page', GalleryComponent);
