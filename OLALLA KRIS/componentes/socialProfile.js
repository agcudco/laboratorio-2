class CustomSocialProfile extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
      shadow.innerHTML = `
        <style>
          div {
            font-family: Arial, sans-serif;
            padding: 1rem;
            display: flex;
            flex-direction: column; /* Organización vertical */
            align-items: center; /* Centrar elementos horizontalmente */
            gap: 0.5rem; /* Espaciado entre elementos */
          }
          img {
            width: 120px;
            height: 120px;
            border-radius: 50%; /* Forma circular */
            object-fit: cover;
            border: 2px solid #333;
          }
          h2, p {
            margin: 0;
          }
          h2 {
            font-size: 1.5rem;
          }
          p {
            font-size: 1rem;
            color: #555;
          }
        </style>
        <div>
          <img src="./imagenes/foto1.jpg" alt="Foto de Kris Olalla">
          <h2>Kris Olalla</h2>
          <p>ksolalla@espe.edu.ec</p>
         <p>Edad: 23 años</p>
         <p>Estudiante de Ingeniería de Sistemas</p>
         <p>Estudiante de la ESPE</p>
         

         <p>Perfil social Educativo de las fuerzas armadas ESPE </p>

        </div>
      `;
    }
  }
  customElements.define('custom-profile', CustomSocialProfile);
  