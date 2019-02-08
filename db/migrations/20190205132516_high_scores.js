
exports.up = function(knex) {
    return knex.schema.createTable('high_scores', table => {
        table.increments()
        table.integer('player_id').notNullable()
        table.foreign('player_id').references('players.id')
        table.integer('score').notNullable()
        table.timestamps(true, true)
    })
}

exports.down = function(knex) {
    return knex.schema.dropTable('high_scores')
}
