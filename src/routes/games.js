const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/games')



router.get('/games/:gameId', ctrl.newGame)
router.get('/games', ctrl.getAllGames)
router.post('/games', ctrl.createGame)



module.exports = router