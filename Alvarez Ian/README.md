# Programacion-Componenentes-Web
Repositorio de Laboratorios PIC

## Proyecto: Componentes Web Personalizados

Este proyecto es una aplicación modular que utiliza **Web Components** para crear interfaces dinámicas y reutilizables. Incluye una galería de imágenes de Pokémon, una tabla interactiva que consume datos de una API y un perfil personal estilizado.

## Tecnologías Utilizadas

- **HTML5**: Estructura del proyecto.
- **CSS3**: Estilización de los componentes.
- **JavaScript (ES6)**: Lógica para los componentes personalizados y consumo de APIs.
- **API Fetch**: Para interactuar con datos dinámicos.

## Componentes

### 1. **MainContainer**
Este componente sirve como contenedor principal para la aplicación y organiza los otros componentes.

#### Características:
- Diseño responsivo.
- Fondo con degradado y bordes estilizados.

---

### 2. **SocialProfileComponent**
Un componente que muestra un perfil estático con información personal básica.

#### Características:
- **Perfil estático:** Incluye una imagen, nombre, ubicación, edad y descripción del usuario.
- **Estilo personalizable:** Se utilizan estilos modernos y centrados, con bordes redondeados y colores armoniosos.
- **Implementación simple:** Fácil de integrar en cualquier proyecto HTML.

#### Ejemplo de Uso:
Agrega el componente personalizado en tu archivo HTML:

<social-profile></social-profile>

### 3. **CustomTableComponent**
Un componente de tabla dinámica que consume datos de una API y los muestra en un formato tabular.

#### Características:
- **Consumo de API:** Obtiene datos desde una URL proporcionada en el atributo `api-endpoint`.
- **Diseño limpio:** Tablas estilizadas con filas alternadas y resaltado al pasar el cursor.
- **Gestión de errores:** Muestra un mensaje en caso de no poder cargar los datos.

#### Uso:

<custom-table api-endpoint="https://jsonplaceholder.typicode.com/users"></custom-table>

### 4. **GalleryComponent**
Una galería dinámica que muestra imágenes de Pokémon obtenidas de la API de PokeAPI.

#### Características:
- **Consumo de datos dinámicos:** Obtiene información en tiempo real desde [PokeAPI](https://pokeapi.co/), cargando imágenes de Pokémon.
- **Carga incremental:** Incluye un botón para cargar más Pokémon dinámicamente, permitiendo explorar una lista más extensa.
- **Diseño adaptable:** Utiliza un diseño de cuadrícula que se ajusta automáticamente al tamaño del contenedor.
- **Interactividad visual:** Animaciones al pasar el cursor sobre las imágenes para mejorar la experiencia del usuario.
- **Completamente modular:** Fácil de integrar en cualquier proyecto mediante el uso de elementos personalizados (`Custom Elements`).

#### Ejemplo de Uso:
Agrega la etiqueta personalizada en tu archivo HTML para mostrar la galería:

<my-gallery></my-gallery>
