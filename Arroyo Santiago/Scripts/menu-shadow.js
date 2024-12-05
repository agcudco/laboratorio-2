class MenuShadow extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });

        const container = document.createElement("ul"); 

        container.classList.add("menu-shadow");

        const opciones = [
            { item: "Inicio", link: "../Htmls/index.html" },
            { item: "Galeria", link: "../Htmls/galeria.html" },
            { item: "Acerca de", link: "../Htmls/AcercaDe.html" },
            { item: "Perfil de Usuario", link: "../Htmls/Perfil.html" },
        ];

        opciones.forEach(op => {
            const itemList = document.createElement("li");
            const enlace = document.createElement("a");
            enlace.textContent = op.item;
            enlace.href = op.link;
            itemList.appendChild(enlace);
            container.appendChild(itemList);
        });

        const estilo = document.createElement("style");
        estilo.textContent = `
  .menu-shadow {
                display: flex;
                justify-content: space-between;
                align-items: center;
                background-color: black;
                color: white;
                padding: 0;
                margin: 0;
                list-style-type: none;
            }
            
            .menu-shadow li {
                flex: 1; 
                text-align: center; 
                padding: 1rem;
            }
            
            .menu-shadow li a {
                text-decoration: none;
                color: white;
                font-size: 1rem;
                font-weight: bold;
            }

            .menu-shadow li:hover {
                background-color: cyan;
            }
        `;

        shadow.appendChild(estilo);
        shadow.appendChild(container);
    }
}

window.customElements.define("menu-shadow", MenuShadow);
