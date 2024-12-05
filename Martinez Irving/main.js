class MainContainer extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });

        this.estilo = document.createElement("style");
        this.estilo.textContent = `
            .main-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: flex-start;
                padding: 20px;
                background-color: #f5f5f5;
                height: 100vh;
            }


            .main-content {
                flex: 1;
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;
                padding: 10px;
                background-color: #fff;
                border-radius: 8px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }

          
        `;

        this.template = document.createElement('template');
        this.template.innerHTML = `
            <div class="main-container">
                
                <div class="main-content">
                    <slot name="content">Bienvenidos</slot>
                </div>
               
            </div>
        `;

        this.shadow.appendChild(this.estilo);
        this.shadow.appendChild(this.template.content.cloneNode(true));
    }
}

window.customElements.define('main-container', MainContainer);
