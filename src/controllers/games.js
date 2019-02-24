const model = require('../models/games')

//  Get a game by Id
function newGame(req, res, next) {
    model.newGame(req.params.gameId)
        .then(function (data) {
            res.send({ data })
        })
        .catch(next)
}

// Make a new game with a string
function createGame(req, res, next) {
    model.createGame(req.body.string)
    .then(function (data) {
        res.send({data})
    })
    .catch(next)
}

// Get top scores for high score table
function getScores(req, res, next) {
    model.getScores()
    .then(function (data){
        res.send({data})
    })
    .catch(next)
}


module.exports = { newGame, createGame, getScores }