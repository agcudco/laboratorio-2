class Menu extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
            <style>
                nav {
                    background: #4caf50;
                    padding: 1rem;
                }
                ul {
                    list-style: none;
                    padding: 0;
                    display: flex;
                    gap: 1rem;
                }
                a {
                    text-decoration: none;
                    color: white;
                    font-weight: bold;
                }
            </style>
            <nav>
                <ul>
                    <li><a href="#" data-page="profile">Perfil</a></li>
                    <li><a href="#" data-page="table">Tabla</a></li>
                    <li><a href="#" data-page="gallery">Galería</a></li>
                </ul>
            </nav>
        `;
        shadow.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector('custom-main').innerHTML = '';
                document.dispatchEvent(new CustomEvent('navigate', { detail: link.dataset.page }));
            });
        });
    }
}
customElements.define('custom-menu', Menu);
