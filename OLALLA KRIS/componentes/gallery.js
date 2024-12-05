class CustomGallery extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
      shadow.innerHTML = `
        <style>
          .gallery { display: flex; flex-wrap: wrap; gap: 1rem; }
          .gallery img { width: 100px; height: 100px; object-fit: cover; }
        </style>
        <div class="gallery"></div>
      `;
      this.loadImages(shadow.querySelector('.gallery'));
    }
  
    async loadImages(container) {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
      const data = await response.json();
      data.results.forEach((pokemon, index) => {
        const img = document.createElement('img');
        img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`;
        container.appendChild(img);
      });
    }
  }
  customElements.define('custom-gallery', CustomGallery);
  