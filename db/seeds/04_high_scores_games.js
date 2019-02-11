
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('high_scores_games').del()
    .then(function () {
      // Inserts seed entries
      return knex('high_scores_games').insert([
        {id: 1, score_id: 1, game_id: 1},
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(
        `SELECT setval('high_scores_games_id_seq', (SELECT MAX(id) FROM high_scores_games));`
      )
    })
};
