class UserGalery extends HTMLElement {
    constructor() {
        super();

        // Crear el Shadow DOM
        this.shadow = this.attachShadow({ mode: "open" });
        this.container = document.createElement("div");
        this.container.classList.add("user-gallery");

        // Crear y aplicar estilos
        this.estilo = document.createElement("style");
        this.estilo.textContent = `
        .user-gallery {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 1rem; 
            padding: 1rem;
        }
        .user-card, .transformations-card, .planet-card {
            background: #fff;
            border: 1px solid #ddd;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            text-align: center;
            padding: 0.75rem;
            max-width: 100%;
        }
        .user-card img, .transformations-card img, .planet-card img {
            max-width: 20%;
            height: auto;
            border-radius: 8px;
            margin-bottom: 0.5rem;
        }
        .user-card h3, .planet-card h3, .transformations-card h3 {
            font-size: 1.25rem;
            margin: 0.25rem 0;
        }
        .user-card p, .planet-card p, .transformations-card p {
            font-size: 0.75rem;
            color: #666;
            margin: 0.25rem 0;
        }
        .error-alert {
            color: red;
            text-align: center;
            font-size: 0.875rem;
            font-weight: bold;
        }
    `;
    
    

        this.shadow.appendChild(this.estilo);
        this.shadow.appendChild(this.container);
    }

    connectedCallback() {
        const endPoint = this.getAttribute("api-endpoint");
        console.log("Endpoint:", endPoint);
        this.fetchData(endPoint);
    }

    fetchData = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            this.render(data);
        } catch (error) {
            console.error("Error con la API:", error);
            this.container.innerHTML = `
                <p class="error-alert">Error con la API</p>
            `;
        }
    };

    render = (character) => {
        this.container.innerHTML = ``;

        
        this.renderMainCharacter(character);  
        if (character.originPlanet) {
            this.renderPlanet(character.originPlanet);
        }
        if (character.transformations) {
            this.renderTransformations(character.transformations);
        }
    };

    renderMainCharacter(character) {
        const card = document.createElement("div");
        card.classList.add("user-card");

        card.innerHTML = `
            <img src="${character.image}" alt="${character.name}">
            <h3>${character.name}</h3>
            <p><strong>Ki:</strong> ${character.ki}</p>
            <p><strong>Máximo Ki:</strong> ${character.maxKi}</p>
            <p><strong>Raza:</strong> ${character.race}</p>
            <p><strong>Afiliación:</strong> ${character.affiliation || "Desconocido"}</p>
          
        `;

        this.container.appendChild(card);
    }

    renderPlanet(planet) {
        const card = document.createElement("div");
        card.classList.add("planet-card");

        card.innerHTML = `
            <h3>Planeta de Origen: ${planet.name}</h3>
            <img src="${planet.image}" alt="${planet.name}">
            <p>${planet.description}</p>
            <p><strong>¿Destruido?:</strong> ${planet.isDestroyed ? "Sí" : "No"}</p>
        `;

        this.container.appendChild(card);
    }

    renderTransformations(transformations) {
        transformations.forEach((transformation) => {
            const card = document.createElement("div");
            card.classList.add("transformations-card");

            card.innerHTML = `
                <h3>${transformation.name}</h3>
                <img src="${transformation.image}" alt="${transformation.name}">
                <p><strong>Ki:</strong> ${transformation.ki}</p>
            `;

            this.container.appendChild(card);
        });
    }
}


window.customElements.define("user-gallery", UserGalery);
