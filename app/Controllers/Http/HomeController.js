const { Octokit } = require("@octokit/rest")

class HomeController {
    index({ view }) {
        return view.render('welcome')
    }
    async upload({ response }) {
        const octokit = new Octokit({
            auth: process.env.GITHUB_TOKEN || ''
        })
        const fs = require('fs')
        const buff = fs.readFileSync('hola')
        const file = await octokit.rest.repos.createOrUpdateFileContents({
            owner: 'operezcham90',
            repo: 'prueba-octokit',
            path: 'hola',
            message: 'upload',
            content: buff.toString('base64')
        })
        return response.json(file)
    }
}

module.exports = HomeController