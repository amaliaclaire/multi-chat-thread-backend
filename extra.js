//
// exports.up = function(knex, Promise) {
//   return knex.schema.createTable('users', function(table) {
//     table.increments();
//     table.string('name').notNullable();
//     table.string('organization').notNullable();
//     table.string('role').notNullable();
//     table.string('reputation').notNullable();
//     table.timestamp('created_at').defaultTo(knex.fn.now());
//     table.timestamp('updated_at').defaultTo(knex.fn.now());
//   })
//   .createTable('tickets', function(table) {
//     table.increments();
//     table.timestamp('created_at').defaultTo(knex.fn.now());
//     table.timestamp('updated_at').defaultTo(knex.fn.now());
//     table.string('title').notNullable();
//     table.string('description').notNullable();
//     table.integer('category').notNullable();
//     table.date('deadline').notNullable().defaultsTo(false);
//     table.integer('user_id').references('id').inTable('users')
//   })
// };
//
// exports.down = function(knex, Promise) {
//   return knex.schema.dropTable('tickets').dropTable('users');
// };
