
exports.up = function(knex, Promise) {
    return knex.schema.createTable('games', table => {
        table.increments()
        table.string('playletters').notNullable()
        // see note below
        table.json('validwords')
        table.integer('perfectscore')
        table.timestamps(true, true)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('games')
};

// knex.table('users')
//   .where({id: 1})
//   .update({json_data: JSON.stringify(mightBeAnArray)});