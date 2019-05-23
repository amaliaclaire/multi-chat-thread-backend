exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1,
          user_name: 'Amalia',
          organization: 'galvanize',
          role: 'software engineer',
          reputation: 1
        },
        { id: 2,
          user_name: 'Mossy',
          organization: 'galvanize',
          role: 'data science dog',
          reputation: 3
        },
        { id: 3,
          user_name: 'Stewart',
          organization: 'galvanize',
          role: 'model',
          reputation: 3
        },
        { id: 4,
          user_name: 'Deebee',
          organization: 'sparks household',
          role: 'catcher',
          reputation: 2
        },
        { id: 5,
          user_name: 'Weebee',
          organization: 'sparks household',
          role: 'fat',
          reputation: 2
        },
      ]);
    });
};
