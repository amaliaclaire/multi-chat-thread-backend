exports.up = function(knex, promise) {
  return knex.schema.createTable('comments', function(table) {
    table.increments('id');
    table.integer('ticket_id').references('id').inTable('tickets');
    table.integer('user_id').references('id').inTable('users');
    table.string('comment').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
}




exports.down = function(knex, Promise) {
return knex.schema.dropTable("comments");
};
