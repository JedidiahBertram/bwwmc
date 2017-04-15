
exports.up = function(knex, Promise) {
  return knex.schema.createTable('menu_items', (t) => {
    t.increments().primary();
    t.string('item_name');
    t.string('item_ingredients');
    t.interger('item_price');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('menu_items')
};
