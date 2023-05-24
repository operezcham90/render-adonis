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
<div class="container-sm">100% de ancho hasta el punto de quiebre pequeño</div>
<div class="container-md">100% de ancho hasta el punto de quiebre mediano</div>
<div class="container-lg">100% de ancho hasta el punto de quiebre grande</div>
<div class="container-xl">100% de ancho hasta el punto de quiebre extra grande</div>
<div class="container-xxl">100% de ancho hasta el punto de quiebre extra extra grande</div>
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
      Columna
    </div>
    <div class="col">
      Columna
    </div>
    <div class="col">
      Columna
    </div>
  </div>
</div>
```


- `<div class="container text-center">`: Este div se utiliza como un contenedor principal para el contenido. La clase `container` es proporcionada por Bootstrap y se utiliza para crear un contenedor con márgenes laterales automáticos y un ancho máximo. La clase `text-center` se utiliza para centrar el texto dentro del contenedor.

- `<div class="row">`: Este div se utiliza para crear una fila en el sistema de cuadrícula. Las filas se utilizan para agrupar columnas y garantizar que se alineen correctamente.

- `<div class="col">`: Estos divs representan columnas en el sistema de cuadrícula. Las columnas se utilizan para organizar y alinear el contenido dentro de una fila. En este ejemplo, se crean tres columnas del mismo tamaño, ya que no se especifica ninguna clase adicional que indique el ancho específico de cada columna.

Dentro de cada columna, se puede agregar cualquier contenido que se desee. En este caso, se ha colocado el texto "Columna" dentro de cada una de las tres columnas.

En resumen, este código crea un contenedor con texto centrado y dentro de él una fila con tres columnas del mismo tamaño que contienen el texto "Columna". El sistema de cuadrícula de Bootstrap permite crear diseños flexibles y receptivos utilizando contenedores, filas y columnas.
