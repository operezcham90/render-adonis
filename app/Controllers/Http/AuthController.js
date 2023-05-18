'use strict'

const User = use('App/Models/User')
const { validate } = use('Validator')

class AuthController {
    showRegisterForm({ view }) {
        return view.render('register')
    }
    showLoginForm({ view }) {
        return view.render('login')
    }
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
            // Lógica en caso de validación fallida
            session
                .withErrors(validation.messages())
                .flashExcept(['password'])
            return response.redirect('back')
        }

        const userData = request.only(['username', 'email', 'password'])
        await User.create(userData)
        return response.redirect('/login')
    }
    async login({ request, response, auth }) {
        const { email, password } = request.all()
        await auth.attempt(email, password)
        return response.redirect('/')
    }
    async logout({ auth, response }) {
        await auth.logout()
        return response.redirect('/')
    }
}

module.exports = AuthController