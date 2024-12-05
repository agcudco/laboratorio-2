class Gallery extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=6")
      .then((res) => res.json())
      .then((data) => this.render(data.results));
  }

  render(pokemons) {
    this.shadowRoot.innerHTML = `
            <style>
                .gallery {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1rem;
                }
                img {
                    width: 100px;
                    height: 100px;
                }
            </style>
            <div class="gallery">
                ${pokemons
                  .map(
                    (pokemon) => `
                    <div>
                        <img src="https://img.pokemondb.net/sprites/home/normal/${pokemon.name}.png" alt="${pokemon.name}" />
                        <p>${pokemon.name}</p>
                    </div>
                `
                  )
                  .join("")}
            </div>
        `;
  }
}
customElements.define("gallery-page", Gallery);
