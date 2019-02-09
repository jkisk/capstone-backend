const express = require('express')
const router = express.Router({ mergeParams: true })
const {getPlayer, createPlayer} = require('../controllers/players')



router.get('/player', getPlayer)
router.post('/player', createPlayer)





module.exports = router