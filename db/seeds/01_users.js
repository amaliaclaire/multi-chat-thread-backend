exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1,
          name: 'Amalia',
          organization: 'galvanize',
          role: 'software engineer',
          reputation: 1
        },
        { id: 2,
          name: 'Mossy',
          organization: 'galvanize',
          role: 'data science dog',
          reputation: 3
        },
        { id: 3,
          name: 'Stewart',
          organization: 'galvanize',
          role: 'model',
          reputation: 3
        },
        { id: 4,
          name: 'Deebee',
          organization: 'sparks household',
          role: 'catcher',
          reputation: 2
        },
        { id: 5,
          name: 'Weebee',
          organization: 'sparks household',
          role: 'fat',
          reputation: 2
        },
      ]);
    });
};
