# Herramientas para Estilizar Sitios Web 📐

Existen diversas herramientas disponibles que nos facilitan la tarea de estilizar nuestros sitios web de manera eficiente y profesional. En este documento, exploraremos algunas de estas herramientas.

## Imgur 📷

[Imgur](https://imgur.com/) es una plataforma en línea para compartir y alojar imágenes de manera gratuita. Una vez que las imágenes están alojadas en Imgur, se generan enlaces directos que se pueden utilizar para mostrar las imágenes en sitios web.

⚠ Lo ideal es evitar el uso de imágenes pesadas, sin embargo, hay casos en los que son absolutamente necesarias, como la venta de productos, noticias, etc.

```html
<img src="https://imgur.com/z3LcaLw" alt="patos" width="4000" height="3000">
```

## YouTube 🎥

[YouTube](https://www.youtube.com/) es una plataforma en línea para compartir y ver videos de manera gratuita. Permite a los usuarios cargar, almacenar y compartir contenido de video con facilidad.

⚠ Lo ideal es evitar el uso de videos pesados. Sin embargo, en ciertos casos, su inclusión puede ser absolutamente necesaria. Es importante tener en cuenta que YouTube muestra publicidad.

```html
<iframe src="https://www.youtube.com/embed/S9hDCskzWSM" title="ardilla" width="560" height="315" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen></iframe>
```

## Water.css ♒

[Water.css](https://watercss.kognise.dev/) es una colección de estilos CSS lista para usar que permite que los sitios web simples luzcan un poco más agradables. No es necesario utilizar clases adicionales para aplicar los estilos, lo cual simplifica el proceso de estilización.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css">
```

## La ventana gráfica 🔳

La [ventana gráfica](https://www.w3schools.com/css/css_rwd_viewport.asp) es el área visible de una página web para el usuario. La ventana gráfica varía según el dispositivo y será más pequeña en un teléfono móvil que en una pantalla de computadora.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## Colormind 🎨

[Colormind](http://colormind.io/) es un generador de esquemas de color que utiliza aprendizaje profundo. Puede aprender estilos de color a partir de fotografías, películas y obras de arte populares.

⚠ Lo ideal es utilizar colores de alto contraste, como blanco y negro, para facilitar la legibilidad del texto.

## Google Fonts 🔡

[Google Fonts](https://fonts.google.com/) es una biblioteca de fuentes tipográficas. Las fuentes se alojan en los servidores de Google, lo que garantiza una entrega rápida y confiable.

## Bootstrap 🚧

[Bootstrap](https://getbootstrap.com/) es un marco de trabajo (framework) diseñado para crear sitios web responsivos y móviles. Proporciona plantillas de diseño para tipografía, formularios, botones, navegación y otros componentes de interfaz.

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">
```
