
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments('id');
    table.string('user_name').notNullable().defaultTo(); 
    table.string('organization').notNullable();
    table.string('role').notNullable();
    table.integer('reputation').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
  .createTable('tickets', function(table) {
    table.increments('id');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.integer('price').notNullable();
    table.boolean('status').notNullable();
    table.string('deadline').notNullable();
    table.integer('user_id').notNullable();
    table.foreign('user_id').references('users.id').onDelete('Cascade')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tickets').dropTable('users');
};
