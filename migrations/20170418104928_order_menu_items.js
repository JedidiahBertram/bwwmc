'use strict'


exports.up = function(knex, Promise) {
    return knex.schema.createTable('order_menu_items', (t) => {
        t.increments()
            .primary();
        t.integer('order_id')
            .notNullable()
            .references('id')
            .inTable('orders')
            .onDelete('CASCADE')
            .index();
        t.integer('menu_item_id')
            .notNullable()
            .references('id')
            .inTable('menu_items')
            .onDelete('CASCADE')
            .index();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('order_menu_items')
};
