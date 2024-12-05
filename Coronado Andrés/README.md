# Laboratorio 2: Creación de Componentes Web Personalizados

Este Laboratorio consiste en una serie de componentes web personalizados que permiten crear una interfaz interactiva y dinámica a través de la integración de Custom Elements que incluyan Shadow Dom, Templates, Solts, connected callback, Cada componente está diseñado para ser reutilizable y fácil de integrar.

## Tabla de Contenidos
1. [CustomHeader](#customheader)
2. [CustomMenu](#custommenu)
3. [CustomMain](#custommain)
4. [SocialProfile](#socialprofile)
5. [CustomTable](#customtable)
6. [GalleryComponent](#gallerycomponent)
7. [CustomFooter](#customfooter)

## CustomHeader

El componente `CustomHeader` representa el encabezado de la página. Utiliza Shadow DOM para encapsular su estilo y estructura.

- **Archivo:** `CustomHeader.js`
- **Función:** Constructor: Se crea un Shadow DOM para encapsular el estilo y contenido del encabezado.
    connectedCallback: Al conectarse al DOM, se define la estructura HTML y los estilos del encabezado. Se crea un template que incluye estilos CSS y un título "Laboratorio 2".
    Estilo: El encabezado tiene un fondo oscuro, texto blanco y un diseño centrado. Utiliza tipografía elegante y un borde inferior para delinear el encabezado.

```javascript
class CustomHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    // ...
}
```

## CustomMenu

El componente `CustomMenu` actúa como un menú de navegación. Permite a los usuarios navegar entre diferentes secciones de la aplicación.

- **Archivo:** `CustomMenu.js`
- **Función:** Opciones del Menú: Se definen las opciones del menú (Perfil, Tabla, Galería)
     para cada    opción. Cada elemento recibe un ID específico para su identificación.
    Eventos de Clic: Se añaden eventos de clic a cada opción del menú. Al hacer clic en una opción, se llama a una función que actualiza el contenido del componente principal (custom-main) para mostrar el contenido correspondiente:
    navigateToProfile: Muestra el perfil del usuario.
    navigateToTable: Muestra una tabla de datos.
    navigateToGallery: Muestra una galería de imágenes.

```javascript
class CustomMenu extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    // ...
}
```

## CustomMain

El componente `CustomMain` es el contenedor principal de la aplicación. Se encarga de mostrar el contenido dinámico basado en la selección del menú.

- **Archivo:** `CustomMain.js`
- **Función:** Proporciona un área para mostrar contenido y un slot para contenido dinámico.
    connectedCallback: Al conectarse al DOM, se define la estructura HTML y los estilos del contenedor principal. Se crea un template que incluye:
    Contenedor Principal: Un div que utiliza flexbox para centrar su contenido, con un fondo gris suave y un ancho del 80% de la pantalla.
    Slot: Un contenedor (slot-container) que permite la inserción de contenido dinámico. Si no se proporciona contenido, se muestra un cuadro de bienvenida predeterminado.
    Cuadro de Bienvenida: Este cuadro tiene un fondo amarillo, texto blanco y un diseño atractivo que invita al usuario a explorar los componentes de la aplicación.

```javascript
class CustomMain extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    // ...
}
```

## SocialProfile

El componente `SocialProfile` muestra el perfil social de un usuario, incluyendo información personal y botones para seguir o enviar un mensaje.

- **Archivo:** `SocialProfile.js`
- **Función:** Presenta información del usuario con opciones interactivas.
    connectedCallback: Al conectarse al DOM, se define la estructura HTML y los estilos del perfil utilizando un template. Este incluye:
    Contenedor del Perfil: Un div que utiliza flexbox para centrar su contenido, con un fondo semitransparente y un diseño atractivo.
    Foto de Perfil: Una imagen circular que representa al usuario.
    Detalles del Perfil: Sección que muestra información personal a través de slots, permitiendo la personalización del contenido al ser utilizado.
    Botones de Acción: Dos botones (Seguir y Mensaje) que redirigen a las redes sociales del usuario al hacer clic.

```javascript
class SocialProfile extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    // ...
}
```

## CustomTable

El componente `CustomTable` se encarga de mostrar una tabla de datos, en este caso, una lista de usuarios obtenida de una API.

- **Archivo:** `CustomTable.js`
- **Función:** Carga y muestra datos en una tabla.
    Constructor: Se crea un Shadow DOM para encapsular los estilos y el contenido de la tabla.
    connectedCallback: Al conectarse al DOM, se llama al método renderTable() para cargar y mostrar la tabla.
    renderTable():
    Se define la estructura HTML y los estilos de la tabla utilizando un template. Este incluye:
    Contenedor de la Tabla: Un div que contiene la tabla con un fondo celeste suave y un diseño moderno.
    Tabla: Estructura que incluye encabezados para ID, Nombre y Correo.
    Estilos: Se aplican estilos para mejorar la presentación, incluyendo efectos hover y un diseño responsivo.
    Carga de Datos: Se realiza una llamada a la API de jsonplaceholder para obtener datos de usuarios y se insertan en el cuerpo de la tabla.

```javascript
class CustomTable extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    // ...
}
```

## GalleryComponent

El componente `GalleryComponent` muestra una galería de imágenes, en este caso, de Pokémon. Utiliza una API para obtener las imágenes.

- **Archivo:** `GalleryComponent.js`
- **Función:** Muestra una galería de imágenes con un efecto de hover.
    Constructor: Se crea un Shadow DOM y se define la estructura HTML y los estilos de la galería.
    Estilos:
    Contenedor de la Galería: Un fondo oscuro con bordes redondeados y centrado.
    Título: Un título destacado para la galería.
    Galería: Se utiliza un diseño de cuadrícula para mostrar las imágenes, con un espaciado adecuado y un efecto de hover que aumenta el tamaño de las imágenes.
    connectedCallback: Al conectarse al DOM, se realiza una llamada a la API de Pokémon para obtener una lista de Pokémon.
    Carga de Imágenes: Se generan las imágenes de los Pokémon utilizando la URL de la API y se insertan en el contenedor de la galería.

```javascript
class GalleryComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    // ...
}
```

## CustomFooter

El componente `CustomFooter`se encargaría de mostrar el pie de página de la aplicación, incluyendo información y derechos de autor.

- **Archivo:** `CustomFooter.js`
- **Función:** Proporciona información adicional y enlaces en el pie de página.
    Constructor: Se crea un Shadow DOM para encapsular los estilos y el contenido del footer.
    connectedCallback: Al conectarse al DOM, se define la estructura HTML y los estilos del footer utilizando un template. Este incluye:
    Contenedor del Footer: Un div con un fondo oscuro, texto blanco y centrado, que se fija en la parte inferior de la ventana.
    Texto de Derechos de Autor: Se muestra el año actual y un mensaje de derechos reservados.
    Estilos: Se aplican estilos para mejorar la presentación, incluyendo efectos de hover para los enlaces.