
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments('id');
    table.string('user_name').notNullable().defaultTo();
    table.string('organization').notNullable();
    table.string('role').notNullable();
    table.integer('reputation').notNullable();
    table.string('avatar_image').notNullable().defaultTo('')
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
