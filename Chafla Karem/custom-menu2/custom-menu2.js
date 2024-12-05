// spell-checker: disable
class MenuPersonalizado extends HTMLElement{
    constructor(){
        super();

        const menuContainer = document.createElement('div');
        menuContainer.classList.add("container-menu");
        
        const menuOptions = [
            {texto:"Inicio", enlace:"index.html", icono:"https://cdn.icon-icons.com/icons2/4233/PNG/512/marshall_badge_canine_patrol_paw_patrol_icon_263862.png"},
            {texto:"Galeria", enlace:"galeria_json.html", icono:"https://cdn.icon-icons.com/icons2/4233/PNG/512/skye_canine_patrol_paw_patrol_icon_263867.png"},
            {texto:"Api", enlace:"api.html", icono:"https://cdn.icon-icons.com/icons2/4233/PNG/512/rubble_canine_patrol_paw_patrol_icon_263842.png"},

        ];
        
        menuOptions.forEach(op => {
            const listItem = document.createElement('li');
            const icon = document.createElement('img');
            icon.src = op.icono;
            icon.alt = op.texto;
            listItem.appendChild(icon);

            const link = document.createElement('a');
            link.href = op.enlace;
            link.textContent = op.texto;
            listItem.appendChild(link);

            menuContainer.appendChild(listItem);

        });
        
        this.appendChild(menuContainer);
    }
}

window.customElements.define('custom-menu', MenuPersonalizado);