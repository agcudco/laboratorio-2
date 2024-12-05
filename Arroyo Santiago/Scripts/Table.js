class CustomTable extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });

        this.container = document.createElement('div');
        this.container.classList.add('table-container');

        this.estilo = document.createElement('style');
        this.estilo.textContent = `
            .table-container {
                width: 100%;
                max-width: 900px;
                margin: 20px auto;
                background-color: #2e3b4e;
                border-radius: 15px;
                box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
                overflow: hidden;
            }

            table {
                width: 100%;
                border-spacing: 0;
                color: #fff;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }

            th, td {
                padding: 15px;
                text-align: left;
            }

            th {
                background-color: #3b4a63;
                text-transform: uppercase;
                font-size: 1.1rem;
                letter-spacing: 1px;
            }

            td {
                background-color: #475768;
                border-bottom: 1px solid #616d7b;
            }

            tr:hover td {
                background-color: #596b79;
            }

            .loading {
                text-align: center;
                color: #ccc;
                font-size: 1.2rem;
                padding: 40px;
            }

            .error-message {
                color: #f44336;
                font-size: 1.1rem;
                text-align: center;
                padding: 20px;
            }

            .no-data {
                text-align: center;
                color: #bbb;
                padding: 30px;
                font-size: 1.1rem;
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

    connectedCallback() {
        const endPoint = this.getAttribute('api-endpoint');
        console.log(endPoint);
        this.fetchData(endPoint);
    }

    async fetchData(url) {
        try {
            const response = await fetch(url);
            const data = await response.json();
            this.render(data);
        } catch (error) {
            console.log("Error con la API", error);
            const tbody = this.shadowRoot.querySelector('#table-body');
            tbody.innerHTML = '<tr class="error-message"><td colspan="4">Failed to load data.</td></tr>';
        }
    }

    render(data) {
        const tbody = this.shadowRoot.querySelector('#table-body');
        if (data.length === 0) {
            tbody.innerHTML = `<tr class="no-data"><td colspan="4">No users available</td></tr>`;
        } else {
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
        }
    }

    async loadData() {
        const endPoint = this.getAttribute('api-endpoint') || 'https://jsonplaceholder.typicode.com/users';
        await this.fetchData(endPoint);
    }
}

window.customElements.define('custom-table', CustomTable);
