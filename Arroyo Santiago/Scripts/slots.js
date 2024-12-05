class ComponentSlot extends HTMLElement {
    constructor() {
        super();

        this.shadow = this.attachShadow({ mode: "open" });
        this.container = document.createElement("div");
        this.container.classList.add("slot-container");
        this.estilo = document.createElement("style");
        this.estilo.textContent = `
            :host {
                display: flex;
                justify-content: center;
                align-items: center;
                 align-items: flex-start;
                 padding-top: 50px;
                box-sizing: border-box;
            }
            
            .slot-container {
                width: 200px;
                border: 1px solid #ddd;
                border-radius: 10px;
                padding: 16px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                background-color: #fff;

            }
            
            .card-image img, 
            .card-image ::slotted(img) {
                width: 100%;
                height: auto;
                max-width: 300px;
                border-radius: 10px;
            }

            .image-header {
                font-size: 1.2em;
                font-weight: bold;
                margin: 10px 0;
            }

            .image-description {
                font-size: 0.9em;
                color: #555;
                margin: 8px 0;
            }

            .more-options {
                margin-top: 10px;
                font-size: 0.8em;
                color: #007BFF;
                cursor: pointer;
            }
        `;

        this.template = document.createElement("template");
        this.template.innerHTML = `
            <div class="card-image">
                <slot name="image">
                    <img src="https://placehold.co/300x200.png" alt="">
                </slot>
            </div>
            <div class="image-header">
                <slot name="titulo">Default title</slot>
            </div>
            <div class="image-description">
                <slot name="descripción">Default description</slot>
            </div>
            <div class="more-options">
                <slot name="opciones">More options</slot>
            </div>
        `;

        this.shadow.appendChild(this.estilo);
        this.container.appendChild(this.template.content.cloneNode(true));
        this.shadow.appendChild(this.container);
    }
}

window.customElements.define('component-slot', ComponentSlot);
