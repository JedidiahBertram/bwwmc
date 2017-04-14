
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (t) => {
    t.increments().primary();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
