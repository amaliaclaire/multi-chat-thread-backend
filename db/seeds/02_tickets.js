
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tickets').del()
    .then(function () {
      // Inserts seed entries
      return knex('tickets').insert([
        { id: 1,
          title: 'Making a website',
          description: 'urgent need of a developer ',
          price: 10,
          status: true,
          deadline: '21/5/2019',
          user_id: 1,
        },
        { id: 2,
          title: 'house is running with mice',
          description: 'anybody able to catch mice? we will pay.',
          price: 50,
          status: true,
          deadline: '30/6/2019',
          user_id: 3,
        },
        { id: 3,
          title: 'the rat king has arrived',
          description: 'oh god send help the mice have taken over the house',
          price: 100,
          status: true,
          deadline: '1/7/2019',
          user_id: 3,
        }
      ]);
    });
};
