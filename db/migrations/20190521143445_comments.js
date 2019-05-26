exports.up = function(knex, promise) {
  return knex.schema.createTable('comments', function(table) {
    table.increments('id');
    table.integer('ticket_id');
    table.foreign('ticket_id').references('tickets.id').onDelete('CASCADE');
    table.integer('user_id');
    table.foreign('user_id').references('users.id').onDelete('CASCADE');
    table.string('comment').notNullable().defaultTo('')
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
}




exports.down = function(knex, Promise) {
return knex.schema.dropTable('comments');
};
