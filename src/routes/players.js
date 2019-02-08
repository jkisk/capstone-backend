const express = require('express')
const router = express.Router()
const {getPlayer, createPlayer} = require('../controllers/players')

router.get('/', getPlayer)
router.post('/', createPlayer)


module.exports = router