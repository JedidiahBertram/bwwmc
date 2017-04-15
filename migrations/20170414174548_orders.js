
exports.up = function(knex, Promise) {
  return knex.schema.createTable('orders', (t) => {
    t.increments().primary();
    t.integer('order_number').notNullable().defaultTo(0);
    t.string('order_date').notNullable().defaultTo('');
    t.string('order_status').notNullable().defaultTo('');
    t.string('order_total').notNullable().defaultTo('');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('orders')
};
