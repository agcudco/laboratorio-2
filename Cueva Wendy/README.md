# Laboratorio2
## Documentacion


### Componentes

<ins>**customTable**</ins>
El codigo inicia con una
`class CustomTableComponent extends HTMLElement {`
donde se señana el nombre del componente ademas que `HTMLElement` indica que es un componente personalizado
posterior  se inicializa el constructor y creamos un Shadow DOM en modo abierto `(mode: 'open')`, que permite el encapsulamiento de estilos y estructura HTML del componente.

Para los templates se encuentra los estilos CSS para dar formato a la tabla `(<style>)`, la tabla HTML cuenta con cabeceras `Name`, `Email` y `Phone`.

Para el metodo `onnectedCallback()` se ejecutara cuando el componente se agrega al DOM de la página, en `fetch('https://jsonplaceholder.typicode.com/users'):` hace una solicitud a la API externa para obtener datos de usuarios con `response.json():` pasa la respuesta en un objeto JSON. y dentro del bucle añade una fila por cada usuario en el cuerpo de la tabla e inserta los valores de las cabeceras correspondientes
Por ultimo en `customElements.define('custom-table', CustomTableComponent);` registra el componente personalizado con el nombre custom-table, que puede ser usado como una etiqueta HTML en la pagina _index.html_.


<ins>**footer**</ins>
El componente FooterComponent funciona como un contenedor reutilizable que muestra un pie de página fijo, mientras permite que el contenido personalizado (como una tabla u otro elemento) sea insertado dinámicamente mediante el uso de un slot, entonces primero se define un componente personalizado llamado `FooterComponent`, que extiende la clase `HTMLElement` y encapsula su contenido mediante un Shadow DOM abierto, permitiendo aislar sus estilos y estructura. El constructor inicializa el Shadow DOM y crea un template que incluye una hoja de estilos para dar formato al componente y se vea atractivo a la visa. Dentro del template, se define un contenedor principal `.container` que utiliza Flexbox para alinear verticalmente sus elementos, y un `slot` llamado `table` que permite insertar contenido externo personalizado, como una tabla HTML. El pie de página (`footer`) está diseñado con un fondo oscuro, texto centrado y color blanco, mostrando un mensaje de derechos de autor. Finalmente, el componente se registra con el nombre `footer-component`, permitiendo su uso en cualquier documento HTML mediante la etiqueta `<footer-component>`, cabe mencionar que este componente permanecera visible ya que se encuentra en el _index.html_

<ins>**gallery**</ins>
El componente `GalleryComponent` es un elemento personalizado que muestra una **galería de imágenes de Pokémon** obtenidas dinámicamente desde una API externa. Extiende la clase `HTMLElement` y utiliza un **Shadow DOM** para encapsular su estructura y estilos, asegurando que no interfiera con otros elementos de la página. 

El **constructor** inicializa el componente creando un Shadow DOM en modo abierto (`mode: 'open'`) y define una plantilla (`template`) que contiene tanto los estilos CSS como la estructura HTML. Los estilos definen una galería en formato de **grid** con 4 columnas (`grid-template-columns: repeat(4, 1fr)`), un espacio entre elementos de 15px (`gap: 15px`) y un fondo claro con bordes redondeados. Las imágenes dentro de la galería tienen un tamaño de 150x150 píxeles, un borde gris, y una transición que aumenta su tamaño y sombra cuando se pasa el cursor sobre ellas, proporcionando un efecto de **hover animado**.

El método `connectedCallback()` se ejecuta cuando el componente es añadido al DOM y realiza una solicitud a la **PokeAPI** (`https://pokeapi.co/api/v2/pokemon?limit=10`) para obtener una lista de 10 Pokémon. Una vez que la respuesta es recibida y convertida a JSON, el componente selecciona el contenedor de la galería (`.gallery`) y crea un elemento `<img>` para cada Pokémon. La URL de cada imagen es generada dinámicamente utilizando la ID extraída de la URL del Pokémon, y se asigna como fuente (`src`) de la imagen. Además, se establece un atributo `alt` con el nombre del Pokémon para accesibilidad.

Finalmente, el componente se registra con `customElements.define('gallery-component', GalleryComponent)`, permitiendo que sea utilizado como una etiqueta HTML personalizada `<gallery-component>`. Al incluir esta etiqueta en una página web, el componente se encarga de mostrar automáticamente la galería de imágenes de los Pokémon obtenidos desde la API.

<ins>**header**</ins>
El componente `HeaderComponent` es un elemento personalizado que muestra un encabezado HTML con un título centrado y estilizado. Extiende la clase `HTMLElement` y utiliza un **Shadow DOM** para encapsular sus estilos y estructura, evitando que afecten a otros elementos de la página. 

El construcctor realiza lo mismo que el constructor de _gallery_ pero en el encabezado (`<header>`) contiene un elemento `<h1>` que muestra el texto _"Laboratorio N2"_. Los estilos CSS aplicados al `<h1>` establecen el color del texto en un tono gris oscuro (`color: #333`) y alinean el título al centro de su contenedor (`text-align: center`).

Finalmente, el componente se registra con `customElements.define('header-component', HeaderComponent)`, y al añadirlo con una etiqueta HMTL se podra mostrar fijo en el _index_.

<ins>**Home**</ins>
El componente `HomeComponent` es un elemento HTML personalizado que presenta una imagen centralizada y estilizada dentro de un contenedor principal, _Shadow Dom_ realiza la misma tarea de encapsular.

El contenedor principal (`<main>`) está diseñado con **Flexbox** para centrar su contenido tanto vertical como horizontalmente (`justify-content: center` y `align-items: center`). Este contenedor ocupa todo el ancho disponible (`width: 100%`), ajusta su altura al contenido y aplica un relleno (`padding: 1em`) para asegurar que su contenido se mantenga bien distribuido.

Finalmente, el componente se registra con `customElements.define('home-component', HomeComponent)`, permitiendo que sea utilizado como una etiqueta HTML personalizada `<home-component>`, cabe resaltar que en el _index.html_ este componente se lo integro de manera principal en la etiqueta `</main-component>` indicando que se muestre siempre al arrancar el motor de busqueda.

<ins>**main**</ins>
El componente MainComponent sirve como un contenedor flexible y reutilizable que puede alojar cualquier contenido dinámico insertado en su interior mediante un _slot_. Este componente extiende la clase HTMLElement y utiliza un Shadow DOM para encapsular su estructura y estilos, ademas actúa como un elemento envolvente `(<main>)` que organiza y estructura secciones principales de una página web.

Los `(<slot></slot>)`, permite que cualquier contenido insertado entre las etiquetas `<main-component>` sea renderizado dentro del componente lo cual facilita su reutilización en distintas partes de la página, permitiendo cambiar su contenido fácilmente sin modificar el componente de manera reiterada.

<ins>**menu**</ins>
Inicializa de la misma manera que los anteriores componentes con respectivo _shadow Dom_ pero dentro de su contenido crea una barra de navegación `(<nav>)` con enlaces que dirigen a diferentes secciones de la página: _Inicio, Perfil, Tabla, y Galería_. Los enlaces están estilizados para destacarse visualmente.

El método `connectedCallback()` se activa cuando el componente es agregado al DOM. En este método, se asignan escuchadores de eventos click a los enlaces del menú. Cada vez que un enlace es clickeado, se llama a la función `navigate()`, que cambia el contenido de un componente principal `(<main-component>)` según la sección seleccionada.

La función `navigate(page)` limpia el contenido actual del componente principal `(main-component)` y luego inserta el componente correspondiente a la página seleccionada.
Si se hace clic en _Inicio:_, se agrega el componente` <home-component>`.
Si se hace clic en _Perfil_, se agrega el componente `<social-profile>`.
Si se hace clic en _Tabla_, se agrega el componente `<custom-table>`.
Si se hace clic en _Galería_, se agrega el componente `<gallery-component>`.

<ins>**socialProfile**</ins>
Este componente está diseñado para mostrar la información personal de un usuario en un formato visual atractivo, el componente define un contenedor principal `(div.profile)` que se estructura con Flexbox para alinear el contenido de manera vertical. Los estilos son los usados en anteriores compoenente pero con modificaciones tanto para los inconos como la imagen principal contienen css para las sombras, bordes redondeados, y transiciones suaves aplicando conocimientos anteriormente adquiridos.

El componente utiliza un _Shadow DOM_ abierto para encapsular tanto los estilos como la estructura HTML del perfil, lo que asegura que no haya interferencias con el estilo global de la página principal y permite que este perfil funcione de manera independiente.

<ins>RECURSOS </ins>


Ademas, se utilizaron recursos adiciones como iconos e imagenes las cuales se encuentran en la carpeta de _styles_, fin que se pueda mostrar de manera mas atractiva al componente de _socialProfile_ asi como _home_.

**main.css**

Por ultimo, dentro del archivo se encuentran estilos generales, ya anteriormente conocidos como estilo para las letras colores y demas.

