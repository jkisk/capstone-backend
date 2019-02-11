const model = require('../models/games')


function newGame(req, res, next) {
    model.newGame(req.params.gameId)
        .then(function (data) {
            res.send({ data })
        })
        .catch(next)
}

function getAllGames(req, res, next) {
    model.getAllGames()
    .then(function (data){
        res.send({data})
    })
    .catch(next)
}

function createGame(req, res, next) {
    model.createGame(req.body.string)
    .then(function (data) {
        res.send({data})
    })
    .catch(next)
}


module.exports = { newGame, getAllGames, createGame }