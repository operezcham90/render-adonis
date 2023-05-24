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
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
</head>

<body>
    <h1>Hola ✋</h1>
</body>

</html>
```
Elementos clave de esta plantilla:

* `<!doctype html>`: Esto establece el tipo de documento HTML que se utilizará.

* `<html lang="es-MX">`: La etiqueta de apertura `<html>` indica el inicio del documento HTML. El atributo `lang` especifica el idioma de la página.

* `<head>`: Esta sección del documento contiene información meta y enlaces a recursos externos.

* `<meta charset="utf-8">`: Define la codificación de caracteres utilizada en la página. En este caso, se utiliza UTF-8, que es ampliamente compatible y admite una amplia gama de caracteres.

* `<meta name="viewport" content="width=device-width, initial-scale=1">`: Esta metaetiqueta ayuda a que la página se adapte correctamente en diferentes dispositivos y tamaños de pantalla.

* `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">`: Este enlace establece la conexión con el archivo CSS de Bootstrap alojado en un servidor externo a través de un CDN. Proporciona los estilos predefinidos de Bootstrap para la página.

## Contenedores responsivos

Los contenedores responsivos te permiten especificar una clase que ocupa el 100% de ancho hasta que se alcance el punto de quiebre especificado, después del cual aplicamos anchos máximos para cada uno de los puntos de quiebre superiores. Por ejemplo, `.container-sm` ocupa el 100% de ancho al principio hasta que se alcanza el punto de quiebre `sm`, donde se escalará con `md`, `lg`, `xl` y `xxl`.

```html
<div class="container-sm">📐 100% de ancho hasta el punto de quiebre pequeño</div>
<div class="container-md">📐 100% de ancho hasta el punto de quiebre mediano</div>
<div class="container-lg">📐 100% de ancho hasta el punto de quiebre grande</div>
<div class="container-xl">📐 100% de ancho hasta el punto de quiebre extra grande</div>
<div class="container-xxl">📐 100% de ancho hasta el punto de quiebre extra extra grande</div>
```

## Contenedores fluidos

Utiliza `.container-fluid` para un contenedor de ancho completo, que abarca todo el ancho del viewport.

```html
<div class="container-fluid">
  Contenedor fluido
</div>
```

Aquí tienes la traducción con formato del texto:

## Sistema de cuadrícula

El sistema de cuadrícula de Bootstrap utiliza una serie de contenedores, filas y columnas para organizar y alinear el contenido. A continuación, se muestra un ejemplo.

```html
    <div class="container text-center">
        <div class="row">
            <div class="col">
                🏛️ Columna
            </div>
            <div class="col">
                🏛️ Columna
            </div>
            <div class="col">
                🏛️ Columna
            </div>
        </div>
    </div>
```

- `<div class="container text-center">`: Este div se utiliza como un contenedor principal para el contenido. La clase `text-center` se utiliza para centrar el texto dentro del contenedor.

- `<div class="row">`: Este div se utiliza para crear una fila en el sistema de cuadrícula. Las filas se utilizan para agrupar columnas y garantizar que se alineen correctamente.

- `<div class="col">`: Estos divs representan columnas en el sistema de cuadrícula. Las columnas se utilizan para organizar y alinear el contenido dentro de una fila.

Aquí tienes la traducción con formato y emoticones:

## Abreviaturas

Se usa el elemento HTML `<abbr>` para abreviaturas y acrónimos, que muestra la versión expandida al pasar el cursor sobre ellos. Las abreviaturas tienen un subrayado predeterminado y cambian el cursor a una ayuda para proporcionar contexto adicional al pasar el cursor sobre ellas, tanto para los usuarios como para las tecnologías de asistencia.

Agrega la clase `.initialism` a una abreviatura para reducir ligeramente el tamaño de fuente.

```html
<p>🌐 <abbr title="Lenguaje de Marcado de Hipertexto" class="initialism">HTML</abbr></p>
```

## Imágenes responsivas

Las imágenes en Bootstrap se vuelven responsivas utilizando la clase `.img-fluid`. Esto aplica `max-width: 100%;` y `height: auto;` a la imagen para que se ajuste al ancho del elemento padre.

```html
<div>
    <h2>Imágen fluida</h2>
    <img src="https://i.imgur.com/Po8Aq36.jpg" class="img-fluid" alt="💿">
</div>
```

## Miniaturas de imágenes

Además de nuestras utilidades de `border-radius`, puedes usar la clase `.img-thumbnail` para darle a una imagen un aspecto de borde redondeado de 1px.

```html
<div>
    <h2>Imágen miniatura</h2>
    <img src="https://i.imgur.com/Po8Aq36b.jpg" class="img-thumbnail" alt="💿">
</div>
```

## Alineación de imágenes

Alinea las imágenes utilizando las clases de ayuda `float` o las clases de alineación de texto. Las imágenes de nivel de bloque se pueden centrar utilizando la clase de utilidad de margen `.mx-auto`.

```html
<div>
    <h2>Alineación de imágenes</h2>
    <img src="https://i.imgur.com/Po8Aq36b.jpg" class="rounded float-start" alt="💿">
    <img src="https://i.imgur.com/Po8Aq36b.jpg" class="rounded float-end" alt="💿">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Id interdum velit laoreet id donec. Ut enim blandit volutpat maecenas volutpat. Sem integer
        vitae
        justo eget magna fermentum iaculis eu non. Habitant morbi tristique senectus et netus. Mus mauris vitae
        ultricies leo integer malesuada nunc vel. Feugiat pretium nibh ipsum consequat nisl vel. Eu nisl nunc mi
        ipsum
        faucibus vitae. Placerat orci nulla pellentesque dignissim enim. Tincidunt eget nullam non nisi. Quam nulla
        porttitor massa id neque aliquam vestibulum morbi.</p>
    <p>Euismod in pellentesque massa placerat duis. Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut. Et
        molestie ac feugiat sed lectus vestibulum. Vehicula ipsum a arcu cursus vitae. Euismod lacinia at quis
        risus. Ac ut consequat semper viverra nam libero justo laoreet. Erat pellentesque adipiscing commodo elit at
        imperdiet. Sed lectus vestibulum mattis ullamcorper. Aliquam purus sit amet luctus venenatis lectus magna.
        Pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Enim sit amet venenatis urna cursus eget.</p>
</div>
```

### Centro

```html
<div>
    <h2>Imágenes centradas</h2>
    <img src="https://i.imgur.com/Po8Aq36b.jpg" class="rounded mx-auto d-block" alt="💿">
</div>
```
