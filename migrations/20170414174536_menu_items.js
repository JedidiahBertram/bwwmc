"use strict";


exports.up = function(knex, Promise) {
    return knex.schema.createTable('menu_items', (t) => {
        t.increments()
            .primary();
        t.string('item_name')
            .notNullable()
            .defaultTo('');
        t.string('item_ingredients')
            .notNullable()
            .defaultTo('');
        t.string('item_price')
            .notNullable()
            .defaultTo('');
        t.string('image_url')
            .notNullable()
            .defaultTo('https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1024px-No_image_3x4.svg.png');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('menu_items');
};
