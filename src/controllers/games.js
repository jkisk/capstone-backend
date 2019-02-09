const model = require('../models/games')


function newGame(req, res, next) {
    model.newGame(req.params.gameId)
        .then(function (data) {
            res.send({ data })
        })
        .catch(next)
}


module.exports = { newGame }