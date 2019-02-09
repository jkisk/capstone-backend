const model = require('../models/games')


function newGame(req, res, next) {
    console.log('in controller')
    model.newGame()
        .then(function (data) {
            res.send({ data })
        })
        .catch(next)
}


module.exports = { newGame }