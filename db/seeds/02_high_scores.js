
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('high_scores').del()
    .then(function () {
      // Inserts seed entries
      return knex('high_scores').insert([
        {id: 1, player_id: 1, score: 700},
        {id: 2, player_id: 2, score: 800},
        {id: 3, player_id: 3, score: 900},
      ]);
    });
};
