class MainMenu extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });

        this.estilo = document.createElement("style");
        this.estilo.textContent = `
            .menu-container {
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #333;
                padding: 1rem;
                border-radius: 10px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }

            .menu-container ul {
                display: flex;
                gap: 2rem;
                list-style: none;
                margin: 0;
                padding: 0;
            }

            .menu-container li {
                transition: transform 0.3s, background 0.3s;
            }

            .menu-container li a {
                text-decoration: none;
                color: white;
                font-size: 1.2rem;
                padding: 0.5rem 1rem;
                border-radius: 8px;
                background-color: rgba(255, 255, 255, 0.1);
                transition: background 0.3s;
            }

            .menu-container li a:hover {
                background-color: rgba(255, 255, 255, 0.3);
                color: #ffbb33;
            }

            .menu-container li:hover {
                transform: scale(1.1);
            }
        `;

        this.template = document.createElement('template');
        this.template.innerHTML = `
            <div class="menu-container">
                <ul>
                    <slot name="menu-items">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </slot>
                </ul>
            </div>
        `;

        this.shadow.appendChild(this.estilo);
        this.shadow.appendChild(this.template.content.cloneNode(true));
    }
}

window.customElements.define('main-menu', MainMenu);
