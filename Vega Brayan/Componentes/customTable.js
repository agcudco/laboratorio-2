class CustomTable extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
      shadow.innerHTML = `
        <style>
          table {
            border-collapse: collapse;
            width: 100%;
            font-family: 'Arial', sans-serif;
            background: #FFF3E0;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
            border-radius: 10px;
          }
          th, td {
            padding: 10px;
            border: 1px solid #FFD54F;
            text-align: left;
          }
          th {
            background: #FFCA28;
            color: #FFFFFF;
            text-transform: uppercase;
          }
          tbody tr:hover {
            background: #FFF9C4;
          }
        </style>
        <table>
          <thead>
            <tr><th>ID</th><th>Name</th><th>Email</th></tr>
          </thead>
          <tbody></tbody>
        </table>
      `;
    }
    connectedCallback() {
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
        });
    }
  }
  window.customElements.define('table-page', CustomTable);
  