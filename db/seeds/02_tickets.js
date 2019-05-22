
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
        },
        { id: 4,
          title: 'test',
          description: 'lorem ipsum stuff',
          price: 100,
          status: true,
          deadline: '1/7/2019',
          user_id: 4,
        },
        { id: 5,
          title: 'test 2',
          description: 'Sed tellus dui, pulvinar nec ipsum id, vestibulum mattis magna. Suspendisse sem tellus, faucibus vitae consequat eget, dictum vitae lectus.',
          price: 100,
          status: true,
          deadline: '1/7/2019',
          user_id: 4,
        },
        { id: 6,
          title: 'test 3',
          description: 'Aliquam tincidunt quam sed urna porta commodo',
          price: 100,
          status: true,
          deadline: '1/7/2019',
          user_id: 4,
        }


      ]);
    });
};
