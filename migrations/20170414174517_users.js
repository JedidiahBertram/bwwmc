
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (t) => {

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
