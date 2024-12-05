class SocialProfileComponent extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
      shadow.innerHTML = `
        <style>
        :host {
          display: block;
          font-family: 'Arial', sans-serif;
        }

        .profile {
          background: linear-gradient(145deg, #fffbf7, #fff3e0);
          border-radius: 15px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06);
          padding: 20px;
          max-width: 300px;
          margin: 20px auto;
          text-align: center;
        }

        .profile h2 {
          margin-top: 0;
          color: #ff6f61;
          font-size: 1.8rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }

        .profile-pic {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          margin: 15px auto;
          background: url('./img/brayan.jpg') center/cover no-repeat;
          border: 3px solid #ffcc80;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .profile p {
          margin: 5px 0;
          color: #444;
          font-size: 0.9rem;
        }

        .button-group {
          margin-top: 15px;
          display: flex;
          justify-content: center;
          gap: 10px;
        }

        .button-group a {
          text-decoration: none;
          background-color: #4caf50;
          color: white;
          padding: 10px 15px;
          border-radius: 5px;
          font-size: 0.9rem;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.3s, transform 0.2s;
        }

        .button-group a:hover {
          background-color: #45a049;
          transform: scale(1.05);
        }

        .button-group a:active {
          transform: scale(0.95);
        }
      </style>
  
        <div class="profile">
          <div class="profile-pic"></div>
          <h2>Perfil</h2>
          <p><strong>Nombre:</strong> Brayan Vega</p>
          <p><strong>Edad:</strong> 21 años</p>
          <p><strong>Fecha de nacimiento:</strong> 16 de enero de 2003</p>
          <p><strong>País:</strong> Ecuador</p>
          <p><strong>Ciudad:</strong> Quito</p>
          <p><strong>Hobbies:</strong> Jugar videojuegos, escuchar música, ver series y películas</p>
          <p><strong>Redes sociales:</strong> @Brayan.vga</p>
          <p><strong>Email:</strong> bjvega4@espe.edu.ec</p>
          <div class="button-group">
                <a href="https://www.instagram.com/brayan.vga/" target="_blank" rel="noopener">Sigueme</a>
                <a href="https://cdn.memegenerator.es/imagenes/memes/full/22/69/22696724.jpg" target="_blank" rel="noopener">MOMASO</a>
            </div>
        </div>
      `;
    }
  }
  
  window.customElements.define('profile-page', SocialProfileComponent);
  