class CustomTable extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
      shadow.innerHTML = `
        <style>
          table { width: 100%; border-collapse: collapse; }
          th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
          th { background: #333; color: #fff; }
        </style>
        <table>
          <thead>
            <tr><th>Nombre</th><th>Email</th><th>Teléfono</th></tr>
          </thead>
          <tbody></tbody>
        </table>
      `;
      this.loadData(shadow.querySelector('tbody'));
    }
  
    async loadData(tbody) {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      data.forEach(user => {
        const row = `<tr><td>${user.name}</td><td>${user.email}</td><td>${user.phone}</td></tr>`;
        tbody.innerHTML += row;
      });
    }
  }
  customElements.define('custom-table', CustomTable);
  