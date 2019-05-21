
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {
          id: 1,
          ticket_id: 1,
          user_id: 2,
          comment: 'woof woof i can help'
        },
        {
          id: 2,
          ticket_id: 2,
          user_id: 5,
          comment: 'well that sucks I can ask my friend deebee'
        },
        {
          id: 3,
          ticket_id: 2,
          user_id: 4,
          comment: 'I am really good at catching mice'
        },
      ]);
    });
};
