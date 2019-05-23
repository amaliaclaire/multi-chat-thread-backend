exports.up = function(knex, promise) {
  return knex.schema.createTable('votes', function(table) {
    table.increments('id');
    table.integer('user_id')
    table.foreign('user_id').references('users.id').onDelete('CASCADE')
    table.integer('type').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
}

exports.down = function(knex, Promise) {
return knex.schema.dropTable("votes");
};
