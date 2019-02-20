const playerModel = require('../models/players')


function getPlayer(req, res, next) {
  playerModel.getPlayer(req.body.playername)
    .then(function (data) {
      res.send({ data })
    })
    .catch(next)
}

function createPlayer(req, res, next) {
  if (!req.body.username && !req.body.password) {
    return next({ status: 400, message: 'Bad Request' })
  }
  playerModel.createPlayer(req.body.playername, req.body.password)
    .then(function (data) {
      return res.status(201).send({ data })
    })
    .catch(next)
}

function scoreGame(req, res, next) {
  // if (!req.params.playerId || !req.body.score) {
  //   return next({ status: 400, message: 'Bad Request' })
  // }
  playerModel.scoreGame(req.params.playerId, req.body.score)
    .then(function (data) {
      return res.status(201).send({ data })
    })
    .catch(next)
}


module.exports = { getPlayer, createPlayer, scoreGame }