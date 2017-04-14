
exports.up = function(knex, Promise) {
  return knex.schema.createTable('orders', (t) => {
    t.increments().primary();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('orders')
};
