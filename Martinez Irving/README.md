# Laboratorio2
 En la presente actividad se desarrolla una aplicación web a través de la integración de Custom Elements que incluyan Shadow Dom, Templates, Solts, connected callback, estilos css, entre otros.



Archivo README.md
Proyecto: Web Components con Shadow DOM
Este proyecto implementa una aplicación modular utilizando Web Components y Shadow DOM para encapsular estilos y estructuras. A continuación, se describe brevemente la funcionalidad de cada componente:

Componentes
1. Header (header.js)
Proporciona un encabezado estilizado con una estructura modular.
Contiene ranuras (slots) para contenido dinámico, como el menú de navegación.
2. Menu (menu.js)
Implementa un menú de navegación principal.
Permite cambiar entre secciones de la aplicación mediante enlaces dinámicos.
3. Main Container (main.js)
Actúa como contenedor principal para la estructura de la aplicación.
Utiliza slots para integrar otros componentes como el encabezado, el contenido y el pie de página.
4. Footer (footer.js)
Genera un pie de página estilizado.
Utiliza Shadow DOM para encapsular estilos y admite contenido dinámico.
5. Social Profile (perfil.js)
Muestra un perfil de red social.
Incluye propiedades dinámicas para el nombre de usuario, la biografía y la imagen de perfil.
6. Gallery (gallery.js)
Crea una galería de imágenes utilizando datos obtenidos desde una API REST (por ejemplo, PokéAPI).
Muestra una lista de imágenes con nombres dinámicos y diseño adaptable.
7. Custom Table (CustomTable.js)
Renderiza una tabla personalizada con datos obtenidos desde la API https://jsonplaceholder.typicode.com/users.
Presenta la información de manera organizada y estilizada.
