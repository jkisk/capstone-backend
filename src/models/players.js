const knex = require('../../db/index')




const getPlayer = (id) => {
    return (
        knex('players')
        .where({ 'id': id })
        .first()
      )

}


module.exports = {getPlayer}