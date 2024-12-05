class CustomMain extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' }); // Crear Shadow DOM
    }

    connectedCallback() {
        // Definir la estructura HTML del Main con el slot
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                /* Estilo del contenedor principal */
                .main-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center; /* Centra todo el contenido horizontalmente */
                    justify-content: center; /* Centra el contenido verticalmente */
                    min-height: 60vh; /* Ocupa un mínimo del 60% del alto de la pantalla */
                    background-color: #BDC3C7; /* Fondo gris suave (más parecido a la imagen que proporcionaste) */
                    color: #2c3e50; /* Texto oscuro */
                    font-family: 'Arial', sans-serif;
                    padding: 20px;
                    box-sizing: border-box;
                    margin: 0 auto; /* Centra el contenido */
                    width: 80%; /* Ocupa el 80% del ancho de la pantalla */
                }

                /* Contenedor del slot */
                .slot-container {
                    margin-top: 20px;
                    padding: 20px;
                    background-color: #ffffff;
                    border: 2px solid #bdc3c7;
                    border-radius: 10px;
                    width: 100%; /* Toma el 100% del ancho disponible */
                    box-sizing: border-box;
                    text-align: center;
                }

                /* Estilo del cuadro de bienvenida */
                .welcome-box {
                    background-color: #f1c40f; /* Fondo más claro para el cuadro de bienvenida */
                    color: white;
                    padding: 30px;
                    margin-bottom: 20px;
                    border-radius: 15px;
                    font-size: 24px;
                    text-align: center;
                    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
                }

                .welcome-box h2 {
                    margin: 0;
                    font-size: 36px;
                    font-weight: 600;
                }

                .welcome-box p {
                    font-size: 18px;
                    margin-top: 10px;
                }
            </style>
            <div class="main-container">
                <div class="slot-container">
                    <!-- Slot para contenido dinámico -->
                    <slot>
                        <!-- Contenido predeterminado si no se pasa contenido al slot -->
                        <div class="welcome-box">
                            <h2>¡Bienvenido!</h2>
                            <p>Explora los componentes web personalizados.</p>
                        </div>
                    </slot>
                </div>
            </div>
        `;

        // Clonar el contenido del template y añadirlo al Shadow DOM
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

window.customElements.define('custom-main', CustomMain);
