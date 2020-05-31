const Model = require('../model/model')
// const request = require('../model/request')
const model = new Model()

class Controller {

  routes = {
    home: '/',
    movies: '/movies',
    series: '/series'
  }

  renderCollection =  (req, res) => {
    let folders = model.getFoldersNames(req.url)
    if (folders) {
      folders.forEach(folder => {
        console.log('folder', folder)
        // for await (let media of request.getMedias(folder)) {
        //   console.log('media', media.data)
        // }
      })
      return res.render('index')
    } else {
      return res.render('error', { message: 'Missing Named Folders' })
    }
    // console.log(request.getTitles());
  }
}

module.exports = Controller
