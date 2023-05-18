# Proveedor de validación

Para usar la validación en tu aplicación AdonisJS, debes asegurarte de que el proveedor de validación esté configurado correctamente. Esto implica agregar el proveedor en la sección `providers` del archivo `start/app.js`, que se parece a esto:

```js
const providers = [
  // ...otros proveedores
  '@adonisjs/validator/providers/ValidatorProvider',
];
```

En AdonisJS, los proveedores son módulos que se utilizan para configurar y registrar diversos componentes y servicios en la aplicación.

## Dependecia

En AdonisJS, el paquete `@adonisjs/validator` es responsable de proporcionar la funcionalidad de validación de datos. Permite definir reglas de validación y validar los datos según esas reglas.

Debe colocarse en la sección `"dependencies"` del archivo `package.json` en tu proyecto de AdonisJS. Esta sección contiene todas las dependencias requeridas para que la aplicación funcione correctamente. Al agregar esta línea, indicas que tu proyecto depende del paquete `@adonisjs/validator` en la versión especificada.

```js
  "dependencies": {
    "@adonisjs/validator": "^5.0.6",
  },
```

## Validación del registro

El código proporcionado es una parte de un controlador llamado `AuthController.js`, que se encarga de manejar la lógica relacionada con la autenticación y registro de usuarios.

```javascript
const { validate } = use('Validator')
```

Se importa la función `validate` del módulo `Validator` de AdonisJS. La función `validate` se utiliza para validar los datos de entrada según las reglas de validación especificadas.

```javascript
async register({ request, session, response }) {
  // Lógica del registro de usuarios
}
```
Dentro de la clase `AuthController`, se define el método `register` que se encarga del registro de nuevos usuarios. Este método usa los objetos `request`, `session` y `response` de los parámetros.

```javascript
const rules = {
  username: 'required|unique:users,username',
  email: 'required|email|unique:users,email',
  password: 'required'
}
```
Se definen las reglas de validación para los datos del formulario de registro. Por ejemplo, se establece que el campo "username" es requerido y único en la tabla "users", y se aplica una validación similar para el campo "email" y el campo "password".

```javascript
const messages = {
  'username.required': 'El campo nombre de usuario es obligatorio.',
  'email.required': 'El campo correo electrónico es obligatorio.',
  'username.unique': 'El nombre de usuario ya está ocupado.',
  'email.unique': 'El correo electrónico ya está ocupado.',
  'email.email': 'El campo correo electrónico debe ser una dirección de correo válida.',
  'password.required': 'El campo contraseña es obligatorio.'
}
```
Se definen mensajes de error personalizados para las reglas de validación. Por ejemplo, si la validación falla en la regla `'username.required'`, se mostrará el mensaje `'El campo nombre de usuario es obligatorio.'`.

```javascript
const validation = await validate(request.all(), rules, messages)
if (validation.fails()) {
  // Lógica en caso de validación fallida
}
```
En esta sección, se realiza la validación de los datos del formulario utilizando la función `validate`. Se pasa el objeto `request.all()` que contiene todos los datos del formulario, así como las reglas de validación y los mensajes de error personalizados. Si la validación falla, se ejecuta la lógica dentro del bloque `if`.

```javascript
session
  .withErrors(validation.messages())
  .flashExcept(['password'])
return response.redirect('back')
```
Se manejan los errores de validación en caso de que la validación falle.

El método completo:

```js
    async register({ request, session, response }) {
        const rules = {
            username: 'required|unique:users,username',
            email: 'required|email|unique:users,email',
            password: 'required'
        }
        const messages = {
            'username.required': 'El campo nombre de usuario es obligatorio.',
            'email.required': 'El campo correo electrónico es obligatorio.',
            'username.unique': 'El nombre de usuario ya está ocupado.',
            'email.unique': 'El correo electrónico ya está ocupado.',
            'email.email': 'El campo correo electrónico debe ser una dirección de correo válida.',
            'password.required': 'El campo contraseña es obligatorio.'
        }
        const validation = await validate(request.all(), rules, messages)
        if (validation.fails()) {
            session
                .withErrors(validation.messages())
                .flashExcept(['password'])
            return response.redirect('back')
        }
        const userData = request.only(['username', 'email', 'password'])
        await User.create(userData)
        return response.redirect('/login')
    }
```

## Vista del registro

Dentro del elemento `<head>`, en la vista `register.edge`, se define un estilo personalizado utilizando CSS. El estilo especificado es para el elemento `<err>`, que se utilizará para mostrar los mensajes de error en rojo y en línea.

```html
  <style>
    err {
      color: darkred;
      display: inline;
    }
  </style>
```

Se muestra un campo de entrada de texto para el nombre de usuario. El atributo `name` especifica el nombre del campo, y el atributo `value` muestra el valor del campo, que se establece utilizando la función `old('username', '')`. Esto permite mantener el valor ingresado previamente en el campo en caso de que la validación falle.

Dentro de este bloque condicional, se verifica si hay errores para el campo "username" utilizando la función `hasErrorFor('username')`. Si hay errores, se muestra un mensaje de error utilizando el elemento `<err>`. El mensaje de error se obtiene utilizando la función `getErrorFor('username')`.

```html
    <input type="text" name="username" value="{{ old('username', '') }}"><br>
    @if(hasErrorFor('username'))
    <err>{{ getErrorFor('username') }}</err><br>
    @endif
```

Los campos de "Correo electrónico" y "Contraseña" son similares al campo "Nombre de usuario". Se incluyen bloques condicionales para mostrar los mensajes de error correspondientes si la validación falla para estos campos.

Vista completa:

````html
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <title>Registro</title>
  <style>
    err {
      color: darkred;
      display: inline;
    }
  </style>
</head>

<body>
  <h1>Registro de nuevo usuario 👤</h1>
  <form action="/register" method="post">
    {{ csrfField() }}
    <label for="username">Nombre de usuario:</label><br>
    <input type="text" name="username" value="{{ old('username', '') }}"><br>
    @if(hasErrorFor('username'))
    <err>{{ getErrorFor('username') }}</err><br>
    @endif

    <label for="email">Correo electrónico:</label><br>
    <input type="email" name="email" value="{{ old('email', '') }}"><br>
    @if(hasErrorFor('email'))
    <err>{{ getErrorFor('email') }}</err><br>
    @endif

    <label for="password">Contraseña:</label><br>
    <input type="password" id="password" name="password"><br>
    @if(hasErrorFor('password'))
    <err>{{ getErrorFor('password') }}</err><br>
    @endif

    <input type="submit" value="Registrarse">
  </form>
</body>

</html>
```