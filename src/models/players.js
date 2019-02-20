const knex = require('../../db/index')
const bcrypt = require('bcrypt')



const getPlayerById = (id) => {
    return (
        knex('players')
            .where({ 'id': id })
            .first()
    )

}

const getPlayer = (playername) => {
    return (
        knex('players')
        .where({'playername': playername})
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

    let newEntry
    return (
        knex('high_scores')
            .insert({player_id: playerId, score: score})
            .returning('*')
        .then(newScoreRow => {
            newEntry = newScoreRow
            return personalBest(playerId)
        })
        .then(personalBestScoreRow => {
            if(!personalBestScoreRow.length || personalBestScoreRow[0].id === newEntry[0].id ){
                return {
                    ...newEntry,
                    isNewHigh: true
                }
            }
            else {
                return {
                    ...newEntry,
                    isNewHigh: false
                }
            }
        })
    )
}

const personalBest = (playerId) => {
    return (
        knex('high_scores')
            .where({player_id: playerId})
            .limit(1)
            .orderBy('score','desc')
    )
}


module.exports = { getPlayer, createPlayer, scoreGame, personalBest, getPlayerById }