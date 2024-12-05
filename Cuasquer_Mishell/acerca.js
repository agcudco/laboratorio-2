// Clave de la API proporcionada
const apiKey = 'Ud0TIzSJ9k8F5scwVmyowFNofaOfngjGHsylzpvh';
const gallery = document.getElementById('gallery');

// Función para obtener datos desde la API de la NASA
async function fetchData() {
    try {
        // URL de la API de la NASA (APOD con 12 imágenes aleatorias)
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=12`);
        
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
        }
        
        const data = await response.json(); // Convierte la respuesta en JSON
        renderData(data); // Llama a la función para renderizar los datos
    } catch (error) {
        console.error("Error al obtener los datos:", error);
        gallery.innerHTML = `<p>No se pudieron cargar los datos.</p>`;
    }
}

// Función para mostrar los datos en la galería
function renderData(items) {
    gallery.innerHTML = ''; // Limpia la galería antes de agregar nuevos datos

    items.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        // Inserta la estructura de cada tarjeta
        card.innerHTML = `
            <img src="${item.url}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>${item.explanation || 'Sin descripción disponible.'}</p>
        `;
        
        gallery.appendChild(card); // Agrega la tarjeta a la galería
    });
}

// Llama a la función para obtener los datos cuando se carga la página
fetchData();
