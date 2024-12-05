class MenuComponent extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
      shadow.innerHTML = `
        <style>
          nav {
            background: linear-gradient(90deg, #AB47BC, #8E24AA);
            padding: 1rem;
            border-radius: 8px;
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: space-around;
          }
          li {
            margin: 0;
          }
          a {
            color: white;
            text-decoration: none;
            font-weight: bold;
            font-size: 1.2rem;
            transition: all 0.3s ease;
          }
          a:hover {
            color: #FFEB3B;
            text-shadow: 0 0 5px #FFEB3B;
          }
        </style>
        <nav>
          <ul>
            <li><a href="#" data-page="profile">PERFIL</a></li>
            <li><a href="#" data-page="table">TABLA</a></li>
            <li><a href="#" data-page="gallery">GALERÍA POKÉMON</a></li>
          </ul>
        </nav>

      `;
    }
    connectedCallback() {
      this.shadowRoot.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', e => {
          e.preventDefault();
          const page = link.getAttribute('data-page');
          const mainContent = document.querySelector('custom-main');
          mainContent.innerHTML = `<${page}-page></${page}-page>`;
        });
      });
    }
  }
  window.customElements.define('custom-menu', MenuComponent);
  