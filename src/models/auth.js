
const bcrypt = require('bcrypt')
const {getPlayer} = require('./players')



const login = (playername, password) => {
  let player
  return getPlayer(playername)
    .then(data => {
      if (!data) throw { status: 400, message: 'Bad Request!' }
      player = data
      return bcrypt.compare(password, data.hashword)
    })
    .then(status => {
      if (!status) throw { status: 401, message: 'Unauthorized' }
      delete player.password
      console.log(player)
      return player
    })
}

module.exports = {login}