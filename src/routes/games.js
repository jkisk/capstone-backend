const express = require('express')
const router = express.Router({ mergeParams: true })
const {newGame} = require('../controllers/games')



router.get('/games', newGame)



module.exports = router