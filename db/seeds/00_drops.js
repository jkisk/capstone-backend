
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('players').del()
    .then(() => knex('high_scores').del())
    .then(() => knex('games').del())
    .then(() => knex('high_scores_games').del())  
}
