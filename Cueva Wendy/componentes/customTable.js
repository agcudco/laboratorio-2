class CustomTableComponent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                /* Estilos de la tabla */
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 1em 0;
                    font-family: Arial, sans-serif;
                    background-color: #fff;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    border-radius: 8px;
                    overflow: hidden;
                }

                /* Estilo de las cabeceras */
                th {
                    background-color: #4CAF50; /* Color de fondo de la cabecera */
                    color: white;
                    padding: 12px 15px;
                    text-align: left;
                    font-size: 1em;
                }

                /* Estilo de las celdas */
                td {
                    padding: 12px 15px;
                    text-align: left;
                    font-size: 0.9em;
                    color: #333;
                    border-bottom: 1px solid #ddd; /* Línea separadora */
                }

                tr:hover {
                    background-color: #f5f5f5; /* Color al pasar el mouse */
                }

                tbody tr:nth-child(odd) {
                    background-color: #f9f9f9;
                }

                table tbody tr:last-child td {
                    border-bottom: none;
                }

                /* Mensaje de error */
                .error {
                    color: red;
                    font-weight: bold;
                    margin-top: 1em;
                    text-align: center;
                }
            </style>

            <!-- Estructura de la tabla -->
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
            <div class="error"></div>
        `;
        shadow.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            }) 
            .then(data => {
                const tbody = this.shadowRoot.querySelector('tbody');
                data.forEach(user => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td>${user.phone}</td>
                    `;
                    tbody.appendChild(row);
                });
            })
            .catch(error => {
                const errorDiv = this.shadowRoot.querySelector('.error');
                errorDiv.textContent = `Failed to load data: ${error.message}`;
            });
    }
}

customElements.define('custom-table', CustomTableComponent);
