const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/games')



router.get('/games/:gameId', ctrl.newGame)



module.exports = router