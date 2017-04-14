
exports.up = function(knex, Promise) {
  return knex.schema.createTable('menu_items', (t) => {

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('menu_items')
};
