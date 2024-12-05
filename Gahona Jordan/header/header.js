class Miheader extends HTMLElement{
    constructor(){
        super();

        this.shadow = this.attachShadow({mode: 'open'});
        this.container = document.createElement('div');
        this.container.classList.add('header-container');
        this.estilo = document.createElement('style');
        this.estilo.textContent = `
            .header-container {
                display: flex;
                background: linear-gradient(to right, white, blue);
                color: white;
                padding: 0px;
                list-style-type: none;
                justify-content: space-around;
                align-items: center;
                width: 100%;
                height: 100%;
                margin: 25px 0px;
                font-size: 1.4em;
                font-family: 'Arial';
                border-radius: 50px;  
            }
            
            
        `;

        this.template = document.createElement('template');
        this.template.innerHTML = `
            <div class="header-container">
                <slot name="cabeza">
                    <h1>Header</h1>
                </slot>
            </div>
        `;



        this.shadow.appendChild(this.container);
        this.shadow.appendChild(this.estilo);
        this.templateClone = this.template.content.cloneNode(true);
        this.container.appendChild(this.templateClone);

    }

}

window.customElements.define('mi-header', Miheader);