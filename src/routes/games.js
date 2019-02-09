const express = require('express')
const router = express.Router({mergeParams: true})
const ctrl = require('../controllers/games')



router.get('/games/:gameId', ctrl.newGame)



module.exports = router