# Controlador de autenticación 🔐

1. Crea un nuevo archivo llamado `AuthController.js` en el directorio `app/Controllers/Http`.

2. Agrega el siguiente código al archivo `AuthController.js`:

```javascript
'use strict'

const User = use('App/Models/User')

class AuthController {
  showRegisterForm ({ view }) {
    return view.render('auth.register')
  }

  showLoginForm ({ view }) {
    return view.render('auth.login')
  }

  async register ({ request, response }) {
    const userData = request.only(['username', 'email', 'password'])
    const user = await User.create(userData)
    return response.json(user)
  }

  async login ({ request, response, auth }) {
    const { email, password } = request.all()
    const token = await auth.attempt(email, password)
    return response.json(token)
  }
}

module.exports = AuthController
```

Este código define un controlador de autenticación con cuatro métodos: `showRegisterForm()`, `showLoginForm()`, `register()`, y `login()`. Los métodos `showRegisterForm()` y `showLoginForm()` devuelven las vistas HTML correspondientes para mostrar los formularios de registro e inicio de sesión, respectivamente.

3. Crea dos archivos nuevos llamados `register.edge` y `login.edge` en el directorio `resources/views/auth`.

4. Agrega el siguiente código al archivo `register.edge`:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Registro</title>
  </head>
  <body>
    <h1>Registro de nuevo usuario</h1>
    <form action="/register" method="post">
      {{ csrfField() }}
      <label for="username">Nombre de usuario:</label><br>
      <input type="text" id="username" name="username"><br>
      <label for="email">Correo electrónico:</label><br>
      <input type="email" id="email" name="email"><br>
      <label for="password">Contraseña:</label><br>
      <input type="password" id="password" name="password"><br>
      <br>
      <input type="submit" value="Registrarse">
    </form>
  </body>
</html>
```

Y agrega el siguiente código al archivo `login.edge`:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Iniciar sesión</title>
  </head>
  <body>
    <h1>Iniciar sesión</h1>
    <form action="/login" method="post">
      {{ csrfField() }}
      <label for="email">Correo electrónico:</label><br>
      <input type="email" id="email" name="email"><br>
      <label for="password">Contraseña:</label><br>
      <input type="password" id="password" name="password"><br>
      <br>
      <input type="submit" value="Iniciar sesión">
    </form>
  </body>
</html>
```

Estos archivos definen las vistas HTML para mostrar los formularios de registro e inicio de sesión.

5. Agrega las rutas para el controlador de autenticación y las vistas HTML en tu archivo `start/routes.js`:

```javascript
Route.get('/register', 'AuthController.showRegisterForm')
Route.post('/register', 'AuthController.register')
Route.get('/login', 'AuthController.showLoginForm')
Route.post('/login', 'AuthController.login')
```

Estas rutas indican que cuando se acceda a `/register` se ejecutará el método `showRegisterForm()` del controlador `AuthController`, cuando se envíe un formulario POST a `/register` se ejecutará el método `register()` del mismo controlador, cuando se acceda a `/login` se ejecutará el método `showLoginForm()` del controlador `AuthController`, y cuando se envíe un formulario POST a `/login` se ejecutará el método `login()` del controlador `AuthController`.

6. Ejecuta el servidor de AdonisJS, y accede `/register` para ver el formulario de registro, y a `/login` para ver el formulario de inicio de sesión.