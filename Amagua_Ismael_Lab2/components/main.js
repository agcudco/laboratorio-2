class Main extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
            <style>
                main {
                    padding: 2rem;
                    display: block;
                    font-family: Arial, sans-serif;
                }
            </style>
            <main>
                <slot></slot> <!-- Slot para contenido dinámico -->
            </main>
        `;
    }
}
customElements.define('custom-main', Main);
