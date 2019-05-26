exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments();
    table.string('user_name').notNullable().defaultTo();
    table.string('organization').notNullable();
    table.string('role').notNullable();
    table.string('reputation').notNullable();
    table.string('avatar_image').notNullable().defaultTo('')
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
  .createTable('tickets', function(table) {
    table.increments();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.integer('price').notNullable();
    table.boolean('status').notNullable().defaultTo('true');
    table.string('deadline').notNullable().defaultsTo(false);
    table.integer('user_id');
    table.foreign('user_id').references('users.id').onDelete('CASCADE');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tickets').dropTable('users');
};
