class CustomTable extends HTMLElement {
    constructor() {
        super();

        this.shadow = this.attachShadow({ mode: 'open' });

        const container = document.createElement('div');
        container.classList.add('table-container');

        // Estilos
        const style = document.createElement('style');
        style.textContent = `
            .table-container {
                font-family: Arial, sans-serif;
                margin: 20px;
                overflow-x: auto;
            }
            table {
                width: 100%;
                border-collapse: collapse;
                margin: 0 auto;
            }
            th, td {
                border: 1px solid #ddd;
                padding: 8px;
                text-align: left;
            }
            th {
                background-color: #4CAF50;
                color: white;
                text-transform: uppercase;
            }
            tr:nth-child(even) {
                background-color: #f9f9f9;
            }
            tr:hover {
                background-color: #f1f1f1;
            }
        `;

        // Estructura inicial del componente
        const template = document.createElement('template');
        template.innerHTML = `
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Usuario</th>
                        <th>Email</th>
                        <th>Teléfono</th>
                        <th>Compañía</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        `;

        // Agregar estilos y contenido al Shadow DOM
        this.shadow.appendChild(style);
        container.appendChild(template.content.cloneNode(true));
        this.shadow.appendChild(container);
    }

    connectedCallback() {
        const apiUrl = this.getAttribute('api-endpoint');
        if (apiUrl) {
            this.fetchData(apiUrl);
        }
    }

    async fetchData(apiUrl) {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            this.renderTable(data);
        } catch (error) {
            console.error('Error al cargar los datos de la API:', error);
            this.renderError();
        }
    }

    renderTable(data) {
        const tbody = this.shadow.querySelector('tbody');
        tbody.innerHTML = ''; 

        data.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${user.phone}</td>
                <td>${user.company?.name || 'Sin información'}</td>
            `;
            tbody.appendChild(row);
        });
    }

    renderError() {
        const tbody = this.shadow.querySelector('tbody');
        tbody.innerHTML = `
            <tr>
                <td colspan="6" style="text-align: center; color: red;">
                    No se pudieron cargar los datos de la API.
                </td>
            </tr>
        `;
    }
}

window.customElements.define('custom-table', CustomTable);
