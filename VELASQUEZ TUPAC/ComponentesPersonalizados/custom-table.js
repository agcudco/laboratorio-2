class CustomTable extends HTMLElement {
    constructor() {
        super();

        // Crear el Shadow DOM
        const shadow = this.attachShadow({ mode: 'open' });

        // Contenedor de la tabla
        const tableContainer = document.createElement('div');
        tableContainer.classList.add('table-container');

        // Crear la tabla
        const table = document.createElement('table');
        table.classList.add('table');

        // Encabezado de la tabla
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        const headers = ['Nombre', 'Username', 'Email', 'Ciudad', 'Teléfono', 'Empresa'];
        headers.forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);

        // Cuerpo de la tabla
        const tbody = document.createElement('tbody');
        table.appendChild(tbody);
        tableContainer.appendChild(table);

        // Estilos de la tabla
        const style = document.createElement('style');
        style.textContent = `
            .table-container {
                margin: 20px auto;
                max-width: 90%;
                overflow-x: auto;
                border: 1px solid #ddd;
                border-radius: 10px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                background-color: #fff;
            }

            .table {
                width: 100%;
                border-collapse: collapse;
                font-family: 'Arial', sans-serif;
                color: #333;
            }

            .table th, .table td {
                padding: 12px 15px;
                text-align: left;
                border: 1px solid #ddd;
            }

            .table th {
                background-color: #4CAF50;
                color: white;
                text-transform: uppercase;
                font-size: 14px;
            }

            .table tr:nth-child(even) {
                background-color: #f9f9f9;
            }

            .table tr:hover {
                background-color: #f1f1f1;
            }

            .table td {
                font-size: 14px;
            }
        `;

        // Añadir elementos al Shadow DOM
        shadow.appendChild(style);
        shadow.appendChild(tableContainer);

        // Obtener datos de la API
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                data.forEach(user => {
                    const row = document.createElement('tr');
                    const values = [
                        user.name,             // Nombre
                        user.username,         // Username
                        user.email,            // Email
                        user.address.city,     // Ciudad
                        user.phone,            // Teléfono
                        user.company.name      // Empresa
                    ];

                    // Crear celdas con los valores relevantes
                    values.forEach(value => {
                        const td = document.createElement('td');
                        td.textContent = value;
                        row.appendChild(td);
                    });
                    tbody.appendChild(row);
                });
            })
            .catch(error => console.error('Error al cargar los datos:', error));
    }
}

// Definir el componente personalizado
window.customElements.define('custom-table', CustomTable);
