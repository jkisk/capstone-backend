const knex = require('../../db/index')
const bcrypt = require('bcrypt')



const getPlayer = (playername) => {
    return (
        knex('players')
            .where({ 'playername': playername })
            .first()
    )

}

const createPlayer = (playername, password) => {
    return getPlayer(playername)
        .then(function (data) {
            if (data) throw { status: 400, message: 'Player already exists' }
            return bcrypt.hash(password, 10)
        })
        .then(function (password) {
            return (
                knex('players')
                    .insert({ playername, hashword: password })
                    .returning('*')
            )
        })
        .then(function ([data]) {
            delete data.hashword
            return data
        })
}

const scoreGame = (playerId, score) => {
    return (
        knex('high_scores')
            .insert({player_id: playerId, score: score})
            .returning('*')
    )
}


module.exports = { getPlayer, createPlayer, scoreGame }