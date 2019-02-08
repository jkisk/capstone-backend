const knex = require('../../db/index')




const getPlayer = (playername) => {
    return (
        knex('players')
        .where({ 'playername': playername })
        .first()
      )

}


module.exports = getPlayer