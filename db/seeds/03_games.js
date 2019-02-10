
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').del()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {id: 1, playletters: 'AIRMEGA', validwords: {"words": ['AIR', 'MEGA', 'GAMER']}, perfectscore: 713},
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(
        `SELECT setval('games_id_seq', (SELECT MAX(id) FROM games));`
      )
    })
};
