const { Router } = require('express');

const router = new Router()

const Controller = require('./controller/controller')
const controller = new Controller()

router.get(controller.routes.home  , (req,res)=> res.redirect('/movies'))

router.get(controller.routes.movies , controller.renderCollection)

router.get(controller.routes.series , controller.renderCollection)

module.exports = router;