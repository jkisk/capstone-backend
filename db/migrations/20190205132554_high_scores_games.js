
exports.up = function(knex, Promise) {
    return knex.schema.createTable('high_scores_games', table => {
        table.increments()
        table.integer('score_id').notNullable()
        table.foreign('score_id').references('high_scores.id')
        table.integer('game_id').notNullable()
        table.foreign('game_id').references('games.id')
        table.timestamps(true, true)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('high_scores_games')
};
