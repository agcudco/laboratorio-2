class Tarjeta extends HTMLElement {
    constructor() {
      super();
  
      this.attachShadow({ mode: "open" });
  
      // Crear contenedor principal
      const container = document.createElement("div");
      container.classList.add("acerca-container");
  
      // Crear el contenido
      const nombre = document.createElement("h1");
      nombre.textContent = "MICHELLE PERUGACHI";
      nombre.classList.add("nombre");
  
      const imagen = document.createElement("img");
      imagen.src = "../Imagenes/chica.jpg"; // Ruta de la imagen
      imagen.alt = "Michelle Perugachi";
      imagen.classList.add("imagen");
  
      const descripcion = document.createElement("p");
      descripcion.classList.add("descripcion");
  
      // Añadir los elementos al contenedor
      container.appendChild(nombre);
      container.appendChild(imagen);
      container.appendChild(descripcion);
  
      // Añadir estilos
      const style = document.createElement("style");
      style.textContent = `
        .acerca-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 20px;
        }
        .nombre {
          font-size: 2rem;
          font-family: Arial, sans-serif;
          margin-bottom: 20px;
          color: #333;
        }
        .imagen {
          width: 150px;
          height: 150px;
          border-radius: 50%; /* Hace que la imagen sea circular */
          object-fit: cover; /* Asegura que la imagen se vea bien dentro del círculo */
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
          margin-bottom: 20px;
        }
        .descripcion {
          font-size: 1rem;
          font-family: Arial, sans-serif;
          color: #555;
          max-width: 500px;
          line-height: 1.5;
        }
      `;
  
      // Añadir el contenedor y los estilos al Shadow DOM
      this.shadowRoot.appendChild(style);
      this.shadowRoot.appendChild(container);
    }
  }
  
  window.customElements.define("mi-tarjeta", Tarjeta);
  