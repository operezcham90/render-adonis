# Usando Repositorios

La sección de dependencias en un archivo de configuración es importante porque permite especificar qué bibliotecas o paquetes externos son necesarios para que el proyecto o la aplicación funcione correctamente. Cuando se instalan o se actualizan las dependencias, se descargan las versiones especificadas para que estén disponibles en el entorno de desarrollo y se puedan utilizar en el código del proyecto.

```json
"dependencies": {
    "@octokit/rest": "^17.8.0"
}
```

- `"dependencies"`: Este es un objeto que representa las dependencias del proyecto o la aplicación. Las dependencias son paquetes o bibliotecas externas que se utilizan en el proyecto.

- `"@octokit/rest"`: Esto es el nombre del paquete o biblioteca que se está agregando como dependencia. En este caso, se trata de "@octokit/rest", que es una biblioteca de cliente para la API de GitHub proporcionada por la organización Octokit. Esta biblioteca permite interactuar con la API de GitHub de manera más sencilla y conveniente.

- `"^17.8.0"`: Esta es la versión mínima requerida de la biblioteca "@octokit/rest". El prefijo "^" indica que se requiere una versión igual o superior a la versión especificada, pero que no debe exceder la próxima versión mayor. En este caso, se especifica que se necesita una versión igual o superior a la versión 17.8.0, pero no se deben usar versiones 18.x.x o superiores.

# Código

```javascript
const { Octokit } = require("@octokit/rest")
```
- `@octokit/rest` es un paquete de cliente para la API de GitHub. Proporciona una interfaz para interactuar con los repositorios, problemas, solicitudes de extracción y otras funcionalidades de GitHub.

```javascript
        const octokit = new Octokit({
            auth: process.env.GITHUB_TOKEN || ''
        })
```
- `Octokit` es la clase principal que se utiliza para interactuar con la API de GitHub. Aquí se crea una nueva instancia de `Octokit` y se proporciona un objeto de configuración. La propiedad `auth` se utiliza para autenticar las solicitudes a la API de GitHub. En este caso, se utiliza `process.env.GITHUB_TOKEN` para obtener el token de acceso personal desde la variable de entorno `GITHUB_TOKEN`. Asegúrate de tener definida esta variable de entorno con tu token de acceso personal.

```javascript
        const fs = require('fs')
        const buff = fs.readFileSync('mensaje')
```
- `fs` es un módulo incorporado de Node.js para trabajar con el sistema de archivos. Aquí se utiliza para leer el contenido del archivo que deseas subir. Asegúrate de proporcionar la ruta correcta al archivo que deseas subir. 

```javascript
        const file = await octokit.repos.createOrUpdateFileContents({
            owner: 'operezcham90',
            repo: 'prueba-octokit',
            path: 'mensaje',
            message: 'upload',
            content: buff.toString('base64')
        })
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

# Token

Para obtener un token de acceso personal de GitHub y poder utilizar la API de GitHub con Octokit REST, sigue estos pasos:

1. Inicia sesión en tu cuenta de GitHub.

2. Haz clic en tu foto de perfil en la esquina superior derecha y selecciona "Settings" (Configuración) en el menú desplegable.

3. En la página de Configuración, haz clic en "Developer settings" (Configuración de desarrollador) en el menú de la izquierda.

4. En la página de Configuración de desarrollador, selecciona "Personal access tokens" (Tokens de acceso personal) en el menú de la izquierda.

5. Haz clic en el botón "Generate new token" (Generar nuevo token).

6. Asegúrate de que la casilla "repo" esté marcada para conceder acceso a los repositorios. También puedes seleccionar otros ámbitos (scopes) según tus necesidades.

7. Después de seleccionar los ámbitos necesarios, desplázate hasta el final de la página y haz clic en el botón "Generate token" (Generar token).

8. GitHub generará un nuevo token de acceso personal. Copia este token y guárdalo en un lugar seguro, ya que no podrás verlo nuevamente.

Una vez que hayas obtenido el token de acceso personal, puedes utilizarlo en Octokit REST para autenticar tus solicitudes a la API de GitHub.
