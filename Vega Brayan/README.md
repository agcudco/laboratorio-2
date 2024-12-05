# Proyecto de Componentes Web Personalizados

Este proyecto utiliza **Web Components** para crear una serie de componentes personalizados como el encabezado, pie de página, perfil de usuario, tabla interactiva y galería de imágenes. Cada componente es independiente, reutilizable y estilizado utilizando el `Shadow DOM`.

## Estructura del Proyecto

La estructura del proyecto es la siguiente:

```
/LABORATORIO2
├── /img # Carpeta que contiene imágenes de perfil y otros recursos visuales
│   └── brayan.jpg # Ejemplo de imagen de perfil
├── /Componentes # Carpeta que contiene los componentes personalizados
│   ├── header.js # Código fuente del componente Header
│   ├── footer.js # Código fuente del componente Footer
│   ├── customTable.js # Código fuente del componente CustomTable
│   ├── socialProfile.js # Código fuente del componente SocialProfile
│   ├── menu.js # Código fuente del componente Menu
│   ├── main.js # Código fuente del componente Main
│   ├── gallery.js # Código fuente del componente Gallery
├── index.html # Archivo principal HTML que incluye los componentes
└── README.md
```

## Componentes

### 1. HeaderComponent

**Descripción:** El componente HeaderComponent se encarga de mostrar el encabezado de la página. Está diseñado con un fondo de gradiente y un texto centrado en color blanco.

**Funcionamiento:**
- Usa el Shadow DOM para encapsular su estilo y contenido, evitando que sus estilos afecten el resto de la página.
- El contenido del encabezado es dinámico y se puede personalizar usando el atributo `slot`, permitiendo que el texto del título sea reemplazado por el contenido que el desarrollador decida al agregar el componente en el HTML.
- El estilo incluye un gradiente de colores cálidos y sombra en el texto, lo que le da un aspecto moderno y atractivo.

```html
<custom-header></custom-header>
```

### 2. FooterComponent

**Descripción:** El componente FooterComponent genera un pie de página con información de derechos reservados.

**Funcionamiento:**
- Al igual que el encabezado, utiliza el Shadow DOM para encapsular su contenido y estilo.
- El pie de página tiene un fondo de gradiente y contiene un texto con los derechos reservados en un cuadro de color de fondo azul.
- Es un componente sencillo y reutilizable que puedes incluir en cualquier página de tu aplicación.

```html
<custom-footer></custom-footer>
```

### 3. CustomTableComponent

**Descripción:** Este componente muestra una tabla con datos dinámicos cargados desde una API.

**Funcionamiento:**
- El componente CustomTable obtiene los datos de una API externa (en este caso, https://jsonplaceholder.typicode.com/users), utilizando la función `fetch`.
- La tabla tiene tres columnas: ID, Nombre y Correo Electrónico.
- Los datos se insertan dinámicamente dentro de la tabla, creando filas por cada usuario obtenido de la API.
- Se aplica un estilo moderno con bordes y colores de fondo que resaltan las filas de la tabla.

```html
<table-page></table-page>
```

### 4. SocialProfileComponent

**Descripción:** Este componente presenta un perfil de usuario con información personal y enlaces a redes sociales.

**Funcionamiento:**
- Muestra una imagen de perfil (que se encuentra en la carpeta `img/`), junto con datos como nombre, edad, país y hobbies.
- Incluye dos botones que redirigen a enlaces externos: uno para seguir al usuario en redes sociales (Instagram) y otro para enviar un mensaje (redirigiendo a una imagen de meme).
- El estilo visual del perfil tiene un fondo degradado y sombra, haciendo que el perfil sea visualmente atractivo.

```html
<profile-page></profile-page>
```

### 5. MenuComponent

**Descripción:** Este componente crea un menú de navegación que permite cambiar entre diferentes secciones de la página.

**Funcionamiento:**
- El menú está compuesto por tres enlaces que corresponden a tres páginas diferentes: Perfil, Tabla y Galería Pokémon.
- Al hacer clic en un enlace, el contenido principal de la página cambia dinámicamente mediante el uso de la propiedad `data-page`, que indica qué componente se debe cargar en el área principal (`<custom-main>`).
- El menú tiene un fondo de gradiente con un efecto de hover para hacer la navegación más interactiva y visualmente atractiva.

```html
<custom-menu></custom-menu>
```

### 6. MainComponent

**Descripción:** Este componente maneja el contenido principal de la página y contiene un mensaje de bienvenida.

**Funcionamiento:**
- Es el contenedor principal donde se insertan los demás componentes. Muestra un mensaje de bienvenida en la parte superior de la página.
- El contenido principal puede ser dinámicamente reemplazado dependiendo de la opción seleccionada en el menú de navegación.
- Tiene un fondo de gradiente y un estilo sencillo con bordes redondeados para mejorar la apariencia.

```html
<custom-main></custom-main>
```

### 7. GalleryComponent

**Descripción:** Este componente carga y muestra una galería de imágenes de Pokémon usando la API PokeAPI.

**Funcionamiento:**
- El componente utiliza `fetch` para obtener una lista de 90 Pokémon de la API `https://pokeapi.co/api/v2/pokemon?limit=10`.
- Las imágenes de los Pokémon se muestran en un formato de cuadrícula usando CSS Grid. Cada imagen está estilizada con un borde blanco, redondeado y un efecto de sombra que hace que las imágenes se agranden ligeramente cuando se pasa el cursor sobre ellas.
- Este componente es ideal para aplicaciones interactivas donde se desea mostrar contenido visual dinámico.

```html
<gallery-page></gallery-page>
```
