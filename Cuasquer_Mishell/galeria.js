// Componente para la galería con datos de usuarios en tabla
class GaleriaConJson extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
        this.container = document.createElement('table'); // Usamos una tabla
        this.container.classList.add('tabla-json');
        
        // Estilo para la tabla
        this.estilo = document.createElement('style');
        this.estilo.textContent = `
            .tabla-json {
                width: 100%;
                border-collapse: collapse;
                margin: 20px 0;
                font-size: 1rem;
                text-align: center;
                background-color: white;
                color: black;
            }
            .tabla-json th, .tabla-json td {
                border: 2px solid #000; /* Bordes negros */
                padding: 12px;
            }
            .tabla-json th {
                background-color: #333; /* Fondo oscuro para encabezado */
                color: white;
            }
            .tabla-json img {
                width: 200px;
                height: 150px;
                object-fit: cover;
                border-radius: 10px;
            }
        `;
        
        this.shadow.appendChild(this.estilo);
        this.shadow.appendChild(this.container);
    }

    connectedCallback() {
        this.endpoint = this.getAttribute('api-endpoint');
        if (this.endpoint) {
            this.fetchData(this.endpoint);
        }
    }

    fetchData = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            this.render(data);
        } catch (error) {
            console.error("Error al obtener los datos", error);
            this.container.innerHTML = `<tr><td colspan="5" class="error-alert">Error al obtener los datos</td></tr>`;
        }
    };

    render = (users) => {
        // Encabezado de la tabla
        this.container.innerHTML = `
            <thead>
                <tr>
                    <th>Imagen</th>
                    <th>Nombre</th>
                    <th>Usuario</th>
                    <th>Correo</th>
                    <th>Dirección</th>
                            </tr>
            </thead>
            <tbody>
            </tbody>
        `;

        const tbody = this.container.querySelector('tbody');
        users.forEach(user => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td><img src="https://via.placeholder.com/90" alt="${user.name}"></td>
                <td>${user.name}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${user.address.street}, ${user.address.city}, ${user.address.zipcode}</td>
            `;

            tbody.appendChild(row);
        });
    };
}

// Definimos el custom element para la galería
window.customElements.define('tarjeta-json', GaleriaConJson);
