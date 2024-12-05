class CustomHeader extends HTMLElement {
    constructor() {
        super();

        this.shadow = this.attachShadow({ mode: 'open' });

        this.estilo = document.createElement("style");
        this.estilo.textContent = `
            .header-container {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 20px;
                background: linear-gradient(45deg, #4a90e2, #50e3c2);
                color: white;
                border-radius: 8px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }

            .navigation {
                display: flex;
                gap: 20px;
            }

            .navigation a {
                text-decoration: none;
                color: white;
                font-size: 1.2rem;
                font-weight: bold;
                transition: color 0.3s;
            }

            .navigation a:hover {
                color: #ffbb33;
            }

            .header-container h1 {
                font-size: 2rem;
                margin: 0;
                text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
            }
        `;

        this.template = document.createElement('template');
        this.template.innerHTML = `
            <div class="header-container">
                <h1><slot name="title">Default Header Title</slot></h1>
                <div class="navigation">
                    <slot name="nav-links">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Services</a>
                    </slot>
                </div>
            </div>
        `;

        this.shadow.appendChild(this.estilo);
        this.shadow.appendChild(this.template.content.cloneNode(true));
    }
}

window.customElements.define('custom-header', CustomHeader);
