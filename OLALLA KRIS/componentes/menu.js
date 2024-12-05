class CustomMenu extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
          nav {
            background: #555;
            color: #fff;
            padding: 1rem;
            display: flex;
            justify-content: space-around;
          }
          a {
            color: #fff;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
        </style>
        <nav>
          <a href="#" data-page="profile">Perfil</a>
          <a href="#" data-page="table">Tabla</a>
          <a href="#" data-page="gallery">Galería</a>
        </nav>
      `;
      shadow.appendChild(template.content.cloneNode(true));
  
      shadow.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          this.changePage(link.getAttribute('data-page'));
        });
      });
    }
  
    changePage(page) {
      const main = document.querySelector('custom-main');
      main.innerHTML = '';
      const pageComponent = document.createElement(`custom-${page}`);
      main.appendChild(pageComponent);
    }
  }
  customElements.define('custom-menu', CustomMenu);
  