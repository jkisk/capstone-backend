
exports.up = function(knex, Promise) {
    return knex.schema.createTable('players', table => {
        table.increments()
        table.string('playername').notNullable().unique()
        table.string('hashword').notNullable()
        table.timestamps(true, true)
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('players')
}
