
exports.up = function(knex, Promise) {
    return knex.schema.createTable('games', table => {
        table.increments()
        table.string('playletters').notNullable()
        // need array solution for below
        table.string('validwords')
        table.integer('perfect-score')
        table.timestamps(true, true)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('games')
};
