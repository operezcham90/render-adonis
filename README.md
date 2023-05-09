# Desplegar AdonisJS en Render ⛅

* Clonar o Descargar el [repositorio](https://github.com/adonisjs/adonis-fullstack-app) 👥

* Crear un repositorio de GitHub con los documentos 🌿

* Crear Servicio Web 🌐

* Establecer comando de construcción 🚧 `npm install`

* Establecer comando de trabajo 💥 `node server.js`

* Crear variables de ambiente 🔐
```
APP_KEY=...
ENV_SILENT=true
```

## Agregar BD 📦

* Crear la BD ✨

* Agregar la dependencia 🌿
```javascript
"dependencies": {
  "pg": "^8.0.2"
}
```

* Agregar variables de ambiente 🔐
```
DB_CONNECTION=pg
DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_DATABASE=
```

* Cambiar el comando de construcción 🚧 `npm install;node ace migration:run --force`
