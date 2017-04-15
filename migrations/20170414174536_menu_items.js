
exports.up = function(knex, Promise) {
  return knex.schema.createTable('menu_items', (t) => {
    t.increments().primary();
    t.string('item_name').notNullable().defaultTo('');
    t.string('item_ingredients').notNullable().defaultTo('');
    t.string('item_price').notNullable().defaultTo('');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('menu_items')
};
