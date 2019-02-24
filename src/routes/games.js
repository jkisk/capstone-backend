const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/games')


router.get('/games/scores', ctrl.getScores)
router.get('/games/:gameId', ctrl.newGame)
router.post('/games', ctrl.createGame)




module.exports = router