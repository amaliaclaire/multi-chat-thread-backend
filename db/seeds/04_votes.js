
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('votes').del()
    .then(function () {
      // Inserts seed entries
      return knex('votes').insert([
        {
          id: 1,
          user_id: 1,
          type: "good"
        },
        {
          id: 2,
          user_id: 5,
          type: "neutral"
        },
        {
          id: 3,
          user_id: 5,
          type: "bad"
        },
        {
          id: 4,
          user_id: 4,
          type: "good"
        },
        {
          id: 5,
          user_id: 4,
          type: "neutral"
        }
      ]);
    });
};
