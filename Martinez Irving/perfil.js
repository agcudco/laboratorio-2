class SocialProfile extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });

        this.estilo = document.createElement("style");
        this.estilo.textContent = `
            .profile-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                background: linear-gradient(145deg, #ff9a9e, #fecfef);
                padding: 20px;
                border-radius: 15px;
                box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
                width: 280px;
                text-align: center;
                margin: 0 auto; /* Centrar el contenedor */
            }

            .profile-container img {
                width: 120px;
                height: 120px;
                border-radius: 50%;
                border: 4px solid #fff;
                object-fit: cover;
                margin-bottom: 20px;
            }

            .profile-container .username {
                font-size: 1.5rem;
                font-weight: bold;
                color: #333;
                margin-bottom: 10px;
            }

            .profile-container .bio {
                font-size: 1rem;
                color: #666;
                margin-bottom: 20px;
                opacity: 0.9;
            }

            .profile-container .button-container {
                display: flex;
                gap: 10px;
                width: 100%;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }

            .profile-container .follow-button, .profile-container .message-button {
                padding: 10px;
                font-size: 0.9rem;
                cursor: pointer;
                border: none;
                border-radius: 8px;
                transition: all 0.3s ease;
            }

            .profile-container .follow-button {
                background-color: #ff6b6b;
                color: white;
            }

            .profile-container .follow-button:hover {
                background-color: #e63946;
            }

            .profile-container .message-button {
                background-color: #2ecc71;
                color: white;
            }

            .profile-container .message-button:hover {
                background-color: #27ae60;
            }
        `;

        this.template = document.createElement('template');
        this.template.innerHTML = `
            <div class="profile-container">
                <img src="https://i.pinimg.com/736x/e6/89/9b/e6899b3480b514a8dbd2a2f17f5611cb.jpg" alt="Profile Picture" class="profile-pic" />
                <div class="username">
                    <slot name="username">Username</slot>
                </div>
                <div class="bio">
                    <slot name="bio">This is a brief bio.</slot>
                </div>
                <div class="button-container">
                    <button class="follow-button">
                        <slot name="follow-button">Follow</slot>
                    </button>
                    <button class="message-button">
                        <slot name="message-button">Message</slot>
                    </button>
                </div>
            </div>
        `;

        this.shadow.appendChild(this.estilo);
        this.shadow.appendChild(this.template.content.cloneNode(true));
    }
}

window.customElements.define('social-profile', SocialProfile);
