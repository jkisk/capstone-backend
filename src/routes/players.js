const express = require('express')
const router = express.Router()
const {getPlayer} = require('../controllers/players')

router.get('/players', getPlayer)


module.exports = router