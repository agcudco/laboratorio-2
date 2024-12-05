// Componente Menu
class Menu extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    const container = document.createElement("div");
    container.classList.add("menu-container");

    const opciones = [
      { item: "Inicio", link: "Index.html" },
      { item: "Tabla", link: "galeria.html" },
      { item: "Galeria ", link: "Acerca.html" },
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
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      .menu-container {
        display: flex;
        justify-content: center;
        background-color: #333;
        padding: 0;
        width: 100%;
      }
      .menu-list {
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        list-style: none;
      }
      .menu-item {
        flex: 1;
        text-align: center;
      }
      .menu-link {
        text-decoration: none;
        color: white;
        font-weight: bold;
        display: block;
        padding: 10px;
      }
    `;

    shadow.appendChild(container);
    shadow.appendChild(estilo);
  }
}

window.customElements.define("mi-menu", Menu);



// Componente Home
class Home extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    const container = document.createElement("div");
    container.classList.add("home-container");

    const contentBox = document.createElement("div");
    contentBox.classList.add("content-box");

    const titulo = document.createElement("h1");
    titulo.textContent = "Bienvenidos";
    titulo.classList.add("titulo");

    const galeria = document.createElement("div");
    galeria.classList.add("galeria");

    const imagenes = [
      "./Imagenes/img1.jpg",
    ];

    imagenes.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      img.classList.add("imagen");
      galeria.appendChild(img);
    });

    const descripcion = document.createElement("p");
    descripcion.textContent =
      "Soy Mishell Cuasquer, bueno en esta sección les voy a contar un poco sobre mí. Tengo una hermana menor que se llama Domenica Cuasquer. Vivo con mis padres, ellos se llaman Veronica Chisaguano y Erasmo Cuasquer. Tenemos una mascota llamada Mushu, ella es una gatita un poco gruñona. Soy estudiante de Ingeniería en Tecnologías en la Universidad de las Fuerzas Armadas ESPE. Mi pasión por la tecnología y la innovación me lleva a explorar constantemente nuevas ideas, resolver problemas y construir herramientas que marquen la diferencia en nuestro mundo.";
    descripcion.classList.add("descripcion");

    contentBox.appendChild(titulo);
    contentBox.appendChild(galeria);
    contentBox.appendChild(descripcion);

    container.appendChild(contentBox);
    

    const estilo = document.createElement("style");
    estilo.textContent = `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      .home-container {
        font-family: Arial, sans-serif;
        text-align: center;
        padding: 20px;
        background-image: url('./Imagenes/fondo.jpg');
        background-size: cover;
        background-position: center;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .content-box {
        background-color: white;
        border-radius: 10px;
        padding: 20px;
        max-width: 600px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        text-align: center;
      }
      .titulo {
        font-size: 24px;
        margin-bottom: 20px;
        color: #333;
      }
      .galeria {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin-bottom: 20px;
      }
      .imagen {
        width: 150px;
        height: 250px;
        object-fit: cover;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
        border-radius: 5px;
      }
      .descripcion {
        font-size: 1rem;
        color: #555;
        text-align: justify;
        line-height: 1.6;
      }
    `;

    this.shadowRoot.appendChild(estilo);
    this.shadowRoot.appendChild(container);
  }
}

window.customElements.define("mi-home", Home);

// Componente Footer
class Footer extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    const container = document.createElement("footer");
    container.textContent = "Todos los derechos reservados @espe.edu.ec";

    const estilo = document.createElement("style");
    estilo.textContent = `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      footer {
        font-family: Arial, sans-serif;
        font-size: 14px;
        text-align: center;
        padding: 10px;
        background-color: #333;
        color: white;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
      }
    `;

    this.shadowRoot.appendChild(estilo);
    this.shadowRoot.appendChild(container);
  }
}

window.customElements.define("mi-footer", Footer);
