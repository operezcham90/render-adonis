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
    async register({ request, response }) {
        const rules = {
            user: 'required',
            email: 'required|email|unique:users,email',
            password: 'required'
        }
        const validation = await validate(request.all(), rules)
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