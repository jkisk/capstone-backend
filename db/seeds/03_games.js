
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').del()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {id: 1, playletters: 'AIRMEGA', validwords: {"words": "AIR MEGA GAMER"}, perfectscore: 713},
      ]);
    });
};
