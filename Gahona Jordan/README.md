# ********** FUNCIONAMIENTO **********

1. **INDEX.HTML**:  
   En el índex y en las demás páginas se encuentran anexados el header, menú y el folder. El archivo permite navegar a las 3 páginas adicionales donde se encuentra cada uno de los componentes del laboratorio como la presentación, la galería con JSON y la galería con API.

2. **Tenemos 5 carpetas**, cada carpeta tiene una función que se redactará a continuación:

   - **Folder**: contiene el pie de página en formato JavaScript.
   - **Header**: contiene la cabeza con el título de cada página en formato JavaScript.
   - **Js**: contiene todos los archivos JavaScript donde se digitaron las funciones para cada página. Entre ellas:
     - `Api.js`: contiene la clase que permite obtener los datos de una API de una página específica.
     - `Galeria_jason.js`: contiene la clase que permite obtener los datos de un JSON gratuito de internet para mostrar en la página.
     - `Tarjeta_presentacion.js`: contiene la clase para dar formato al texto del HTML. Este texto incluye la información solicitada del autor.
   - **Menú**: contiene el archivo menú, que permite la navegación entre las páginas.
   - **Páginas**: contiene los HTML que ejecutan lo solicitado, como:
     - `Api.html`: muestra la información obtenida de la API.
     - `Galeria_json.html`: muestra la información obtenida del JSON.
     - `Presentación.html`: muestra la información solicitada del autor.
