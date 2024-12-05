class HeaderShadow extends HTMLElement {
    constructor() {
      super();

      const shadow = this.attachShadow({ mode: "open" });
  

      const container = document.createElement("header");
      container.classList.add("header-shadow");
  
      container.innerHTML = `
          <div class="header-content">
              <h2>Laboratorio 2</h2>
              <p>Explora, aprende y disfruta</p>
          </div>
      `;
  
      const estilo = document.createElement("style");
      estilo.textContent = `
          .header-shadow {
              width: 100%;
              background-color: #4CAF50;
              color: white;
              text-align: center;
              padding: 20px 0;
              box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
          }
  
          .header-content h2 {
              margin: 0;
              font-size: 2.5rem;
          }
  
          .header-content p {
              margin: 0;
              font-size: 1.2rem;
          }
  
          @media (max-width: 768px) {
              .header-content h1 {
                  font-size: 2rem;
              }
              .header-content p {
                  font-size: 1rem;
              }
          }
      `;
  
      shadow.appendChild(estilo);
      shadow.appendChild(container);
    }
  }
  
  window.customElements.define("mi-header", HeaderShadow);
  