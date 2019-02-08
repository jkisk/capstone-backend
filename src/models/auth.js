
const bcrypt = require('bcrypt')
const players = require('./players')



const login = (playername, password) => {
  let player
  return players.getPlayer(playername)
    .then(data => {
      if (!data) throw { status: 400, message: 'Bad Request!' }
      user = data
      return bcrypt.compare(password, data.hashword)
    })
    .then(status => {
      if (!status) throw { status: 401, message: 'Unauthorized' }
      delete player.password
      return player
    })
}

module.exports = {login}