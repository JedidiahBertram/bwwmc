
exports.up = function(knex, Promise) {
  return knex.schema.createTable('orders', (t) => {

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('orders')
};
