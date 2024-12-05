class CustomTable extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });

        this.estilo = document.createElement("style");
        this.estilo.textContent = `
            .table-container {
                width: 100%;
                overflow-x: auto;
                background-color: #fff;
                border-radius: 8px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                margin: 20px 0;
            }

            table {
                width: 100%;
                border-collapse: collapse;
                text-align: left;
                margin: 0;
            }

            th, td {
                padding: 12px;
                border-bottom: 1px solid #ddd;
            }

            th {
                background-color: #f4f4f4;
                font-weight: bold;
            }

            tr:hover {
                background-color: #f1f1f1;
            }

            .loading {
                text-align: center;
                padding: 20px;
                font-size: 1.2rem;
            }
        `;

        this.template = document.createElement('template');
        this.template.innerHTML = `
            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody id="table-body">
                        <tr class="loading"><td colspan="4">Loading...</td></tr>
                    </tbody>
                </table>
            </div>
        `;

        this.shadow.appendChild(this.estilo);
        this.shadow.appendChild(this.template.content.cloneNode(true));

        this.loadData();
    }

    async loadData() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            const tbody = this.shadowRoot.querySelector('#table-body');

            tbody.innerHTML = '';
            data.forEach(user => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.address.city}</td>
                `;
                tbody.appendChild(row);
            });
        } catch (error) {
            console.error('Error fetching data:', error);
            const tbody = this.shadowRoot.querySelector('#table-body');
            tbody.innerHTML = '<tr><td colspan="4">Failed to load data.</td></tr>';
        }
    }
}

window.customElements.define('custom-table', CustomTable);
