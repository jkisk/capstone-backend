
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('players').del()
    .then(function () {
      // Inserts seed entries
      return knex('players').insert([
      {id: 1, playername: 'Jamie', hashword: '$2a$10$koJU7uEkyI9Ju2g/4067JOF6Aii10T53k.xAFAvhgERrkpcxPEqcq'},
        {id: 2, playername: 'Milo', hashword: '$2a$10$2SgVm2rMACyU6IHUe8ghzuYF3TUwwIKCfysRrGdy.1wE9LJ2QKWta' },
        {id: 3, playername: 'Felix', hashword: '$2a$10$j9xH63OzFXSVK5AjZOSJGO67ceyENUD2XcDIo3jVQW/n5DOQnVBWq' },
      ]);
    });
};

// frog, turtle, dino