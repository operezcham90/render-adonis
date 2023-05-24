# Bootstrap 5 🚧

[Bootstrap 5](https://getbootstrap.com/), es una biblioteca de código abierto popular que permite a los desarrolladores 
crear sitios web y aplicaciones web de manera rápida y fácil. Bootstrap proporciona un conjunto de herramientas y componentes preestilizados, 
así como un sistema de cuadrícula flexible, que facilita el diseño y la estructura de las páginas web.

## Plantilla 🧱

```html
<!doctype html>
<html lang="es-MX">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hola ✋</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
  </head>
  <body>
    <h1>>Hola ✋</h1>
  </body>
</html>
```
Elementos clave de esta plantilla:

1. `<!doctype html>`: Esto establece el tipo de documento HTML que se utilizará.

2. `<html lang="es-MX">`: La etiqueta de apertura `<html>` indica el inicio del documento HTML. El atributo `lang` especifica el idioma de la página.

3. `<head>`: Esta sección del documento contiene información meta y enlaces a recursos externos.

4. `<meta charset="utf-8">`: Define la codificación de caracteres utilizada en la página. En este caso, se utiliza UTF-8, que es ampliamente compatible y admite una amplia gama de caracteres.

5. `<meta name="viewport" content="width=device-width, initial-scale=1">`: Esta metaetiqueta ayuda a que la página se adapte correctamente en diferentes dispositivos y tamaños de pantalla.

6. `<title>Hola ✋</title>`: Define el título de la página que se mostrará en la pestaña del navegador.

7. `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">`: Este enlace establece la conexión con el archivo CSS de Bootstrap alojado en un servidor externo a través de un CDN. Proporciona los estilos predefinidos de Bootstrap para la página.

8. `<body>`: Esta etiqueta marca el comienzo del contenido visible de la página.

9. `<h1>>Hola ✋</h1>`: Un encabezado `<h1>` que muestra el texto "Hola ✋". El `>` antes del texto puede ser un error de escritura y debería corregirse eliminándolo.

En resumen, esta plantilla crea una página HTML básica con el título "Hola ✋" y muestra un encabezado `<h1>` con el texto "Hola ✋". También utiliza el archivo CSS de Bootstrap a través de un CDN para aplicar estilos predefinidos de Bootstrap a la página.

## cosos
Paso 2: Encabezado y barra de navegación
Agrega el siguiente código dentro del `<body>`:

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Mi Blog</a>
</nav>
```

Paso 3: Contenedor principal
Agrega el siguiente código después de la barra de navegación:

```html
<div class="container">
```

Paso 4: Título de la página
Agrega el siguiente código dentro del contenedor principal:

```html
<h2>Bienvenido a mi Blog</h2>
```

Paso 5: Sistema de cuadrícula
Agrega el siguiente código después del título de la página:

```html
<div class="row">
  <div class="col-md-6">
    <h3>Artículo 1</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu dapibus libero. Integer condimentum nunc at tellus fringilla vulputate.</p>
    <a href="#" class="btn btn-primary">Leer más</a>
  </div>
  <div class="col-md-6">
    <h3>Artículo 2</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu dapibus libero. Integer condimentum nunc at tellus fringilla vulputate.</p>
    <a href="#" class="btn btn-primary">Leer más</a>
  </div>
</div>
```

Paso 6: Componentes adicionales
Agrega el siguiente código después del sistema de cuadrícula:

```html
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Destacado</h5>
    <p class="card-text">Este es un artículo destacado. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <a href="#" class="btn btn-primary">Leer más</a>
  </div>
</div>
```

Paso 7: Pie de página
Agrega el siguiente código después de los componentes adicionales:

```html
<footer class="footer">
  <div class="container">
    <p>Derechos de autor &copy; 2023 Mi Blog. Todos los derechos reservados.</p>
  </div>
</footer>
```

Paso 8: Cierre
Agrega el siguiente código para cerrar los elementos HTML abiertos:

```html
</div> <!-- Cierre del contenedor principal -->
</body>
</html> <!-- Cierre del documento HTML -->
```

Eso es todo. Ahora tienes un ejemplo básico de un sitio web utilizando Bootstrap. Puedes guardar el código en un archivo HTML y abrirlo en
