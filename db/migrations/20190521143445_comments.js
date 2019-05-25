exports.up = function(knex, promise) {
  return knex.schema.createTable('comments', function(table) {
    table.string('id');
    table.foreign('user_id').references('id'); 
    table.string('comment').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
}




exports.down = function(knex, Promise) {
return knex.schema.dropTable("comments");
};
