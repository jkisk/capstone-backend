
exports.up = function(knex) {
    return knex.schema.createTable('players', table => {
        table.increments()
        table.string('playername').notNullable()
        table.string('hashword').notNullable()
        table.timestamps(true, true)
    })
}

exports.down = function(knex) {
    return knex.schema.dropTable('players')
}
