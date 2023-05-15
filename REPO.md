# Usando Repositorios

```javascript
const { Octokit } = require("@octokit/rest");
```
- `@octokit/rest` es un paquete de cliente para la API de GitHub. Proporciona una interfaz para interactuar con los repositorios, problemas, solicitudes de extracción y otras funcionalidades de GitHub.

```javascript
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN || '', // Usando process.env para acceder a la variable de entorno GITHUB_TOKEN
});
```
- `Octokit` es la clase principal que se utiliza para interactuar con la API de GitHub. Aquí se crea una nueva instancia de `Octokit` y se proporciona un objeto de configuración. La propiedad `auth` se utiliza para autenticar las solicitudes a la API de GitHub. En este caso, se utiliza `process.env.GITHUB_TOKEN` para obtener el token de acceso personal desde la variable de entorno `GITHUB_TOKEN`. Asegúrate de tener definida esta variable de entorno con tu token de acceso personal.

```javascript
const fs = require('fs');
const buff = fs.readFileSync('ruta/al/archivo');
```
- `fs` es un módulo incorporado de Node.js para trabajar con el sistema de archivos. Aquí se utiliza para leer el contenido del archivo que deseas subir. Asegúrate de proporcionar la ruta correcta al archivo que deseas subir.

```javascript
const file = await octokit.repos.createOrUpdateFileContents({
  owner: 'usuario-cuenta-github',
  repo: 'nombre-repositorio',
  path: 'ruta/nombre-archivo',
  message: 'mensaje de actualizacion',
  content: buff.toString('base64'),
  sha: '...', // Asumiendo que tenemos el SHA del archivo existente (para actualizar)
});
```
- `octokit.repos.createOrUpdateFileContents()` es un método proporcionado por Octokit para crear o actualizar el contenido de un archivo en un repositorio de GitHub. Se le pasa un objeto con los siguientes parámetros:
  - `owner`: El nombre de usuario o la organización propietaria del repositorio.
  - `repo`: El nombre del repositorio.
  - `path`: La ruta y el nombre del archivo.
  - `message`: El mensaje asociado con la actualización del archivo.
  - `content`: El contenido del archivo codificado en base64. Se utiliza `buff.toString('base64')` para convertir el búfer en una cadena base64.
  - `sha`: El SHA del archivo existente en el repositorio. Esto se utiliza para actualizar un archivo existente. Asegúrate de proporcionar el SHA correcto o deja este campo vacío para crear un archivo nuevo.

```javascript
file.data.content.sha
```
- `file` es la respuesta de la llamada a `createOrUpdateFileContents()`. `file.data.content.sha` contiene el SHA del archivo después de la actualización. Puedes guardar este valor si necesitas realizar futuras actualizaciones en el mismo archivo.

Recuerda que el código anterior hace uso de `await`, lo que significa que debe estar dentro de una función asincrónica (`async`).
