const playerModel = require('../models/players')


function getPlayer(req, res, next){
    playerModel.getPlayer(req.params.id)
    .then(function(data){
      res.send({ data })
    })
    .catch(next)
  }


  module.exports = {getPlayer}