const auth = require('../models/auth')
const player = require('../models/players')
const jwt = require('jsonwebtoken')


// Login player
const login = (req, res, next) => {
  if (!req.body.playername || !req.body.password)
    return next({ status: 400, message: 'Bad Request' })

  auth.login(req.body.playername, req.body.password)
    .then(player => {
      const token = jwt.sign({ id: player.id }, process.env.SECRET)
      return res.status(200).send({ token })
    }).catch(next)
}

// Get playername with id
const status = (req, res, next) =>
  player.getPlayerById(req.claim.id)
    .then(player => {
      res.status(200).send(player)
    }).catch(next)


// Authenticate user
const authenticated = (req, res, next) => {
  if (!req.headers.authorization)
    return next({ status: 401, message: 'Authentication Failed' })
  const [bearer, token] = req.headers.authorization.split(' ')
  jwt.verify(token, process.env.SECRET, (err, payload) => {
    if (err) return next({ status: 401, message: 'Unauthorized' })
    req.claim = payload
    next()
  })
}

const isSelf = (req, res, next) => {
  if (parseInt(req.params.playerId) !== req.claim.id)
    return next({ status: 401, message: 'Unauthorized' })
  next()
}


module.exports = { login, status, authenticated, isSelf }