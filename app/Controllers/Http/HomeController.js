const { Octokit } = require("@octokit/rest")
const fs = require('fs')

class HomeController {
    index({ view }) {
        return view.render('welcome')
    }

    async upload({ response }) {
        const octokit = new Octokit({
            auth: process.env.GITHUB_TOKEN || ''
        })
        const buff = fs.readFileSync('mensaje')
        const file = await octokit.repos.createOrUpdateFileContents({
            owner: 'operezcham90',
            repo: 'prueba-octokit',
            path: 'mensaje',
            message: 'upload',
            content: buff.toString('base64')
        })
        return response.json(file)
    }
}

module.exports = HomeController