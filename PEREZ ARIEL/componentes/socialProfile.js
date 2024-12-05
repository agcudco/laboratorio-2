class SocialProfileComponent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                .profile {
                    padding: 1em;
                    text-align: center;
                }
                .profile img {
                    max-width: 100px;
                    border-radius: 50%;
                }
            </style>
            <div class="profile">
                <img src="styles/file.enc.jpeg" alt="Profile Image">
                <h2>Ariel Perez</h2>
                <p>Junior frontend developer</p>
                <p>Estudiante de la ESPE</p>
                <p>Ing. en Sistemas</p>
                <p>Email: amperez5@espe.edu.ec</p>
                <p>Tlf: 0963680863</p>
            </div>
        `;
        shadow.appendChild(template.content.cloneNode(true));
        
    }
}

customElements.define('social-profile', SocialProfileComponent);