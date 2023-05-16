class HomeController {
    index({ view }) {
        return view.render('welcome')
    }
}

module.exports = HomeController