// Componente Menu
class Menu extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: "open" });
  
      const container = document.createElement("div");
      container.classList.add("menu-container");
  
      const opciones = [
        { item: "Inicio", link: "../HTML/Index.html" },
        { item: "Galería", link: "../HTML/galeria.html" },
        { item: "API", link: "../HTML/api.html" },
      ];
  
      const lista = document.createElement("ul");
      lista.classList.add("menu-list");
  
      opciones.forEach(op => {
        const itemList = document.createElement("li");
        itemList.classList.add("menu-item");
        const enlace = document.createElement("a");
        enlace.textContent = op.item;
        enlace.href = op.link;
        enlace.classList.add("menu-link");
        itemList.appendChild(enlace);
        lista.appendChild(itemList);
      });
  
      container.appendChild(lista);
  
      const estilo = document.createElement("style");
      estilo.textContent = `
        .menu-container {
          display: flex;
          justify-content: center;
          background-color: #333;
          padding: 10px;
          border-radius: 8px;
        }
        .menu-list {
          display: flex;
          gap: 20px;
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .menu-link {
          text-decoration: none;
          color: white;
          font-weight: bold;
        }
      `;
  
      shadow.appendChild(container);
      shadow.appendChild(estilo);
    }
  }
  
  window.customElements.define("mi-menu", Menu);
  
  
  class Footer extends HTMLElement {
    constructor() {
      super();
  
      this.attachShadow({ mode: "open" });
  
      const container = document.createElement("footer");
      container.textContent = "Todos los derechos reservados ESPE";
  
      const estilo = document.createElement("style");
      estilo.textContent = `
        footer {
          font-family: Arial, sans-serif;
          font-size: 14px;
          text-align: center;
          padding: 10px;
          background-color: #333;
          color: white;
          position: fixed;
          bottom: 0;
          width: 100%;
        }
      `;
  
      this.shadowRoot.appendChild(estilo);
      this.shadowRoot.appendChild(container);
    }
  }
  
  window.customElements.define("mi-footer", Footer);
  