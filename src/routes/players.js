const express = require('express')
const router = express.Router()
const {getPlayer} = require('../controllers/players')

router.get('/:id', getPlayer)


module.exports = router