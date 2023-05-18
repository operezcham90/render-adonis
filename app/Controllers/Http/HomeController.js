const Env = use('Env')
const Hash = use('Hash')
const { Octokit } = require("@octokit/rest")
const fs = require('fs')

class HomeController {
    index({ view }) {
        return view.render('welcome')
    }

    async upload({ response }) {
        const octokit = new Octokit({
            auth: Env.get('GITHUB_TOKEN', '')
        })
        const buff = fs.readFileSync('mensaje')
        const name = await Hash.make(Math.random() + '')
        const data = {
            owner: 'operezcham90',
            repo: 'prueba-octokit',
            path: name,
            message: '💬',
            content: buff.toString('base64')
        }
        const ack = await octokit.repos.createOrUpdateFileContents(data)
        return response.json(ack.data.content.sha)
    }
}

module.exports = HomeController