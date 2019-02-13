const express = require('express')
const router = express.Router({ mergeParams: true })
const {getPlayer, createPlayer, scoreGame} = require('../controllers/players')



router.get('/player', getPlayer)
router.post('/player', createPlayer)
router.post('/player/:playerId/:score', scoreGame)





module.exports = router