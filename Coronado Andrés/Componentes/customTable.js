class CustomTable extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' }); // Crear Shadow DOM
    }

    connectedCallback() {
        // Cargar la tabla cuando el componente se conecte al DOM
        this.renderTable();
    }

    renderTable() {
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                .table-container {
                    margin: 30px auto;
                    max-width: 1000px;
                    background-color: rgba(173, 216, 230, 0.8); /* Celeste suave con transparencia */
                    border-radius: 8px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    padding: 20px;
                    font-family: Arial, sans-serif;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                }
                th, td {
                    padding: 12px;
                    text-align: left;
                    border-bottom: 1px solid #ddd;
                }
                th {
                    background-color: #f39c12;
                    color: Black;
                    font-weight: bold;
                }
                tr:hover {
                    background-color: #f1f1f1;
                }
                caption {
                    font-size: 1.5rem;
                    margin: 10px 0;
                    font-weight: bold;
                    color: #f39c12;
                }
            </style>
            <div class="table-container">
                <caption>Lista de Usuarios</caption>
                <table id="users-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Correo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Los datos de los usuarios se cargarán aquí -->
                    </tbody>
                </table>
            </div>
        `;
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        // Llamar a la API y poblar la tabla
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                const tbody = this.shadowRoot.querySelector('tbody');
                tbody.innerHTML = data.map(user => `
                    <tr>
                        <td>${user.id}</td>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                    </tr>
                `).join('');
            })
            .catch(error => {
                console.error('Error al cargar los datos:', error);
            });
    }
}

window.customElements.define('custom-table', CustomTable);
