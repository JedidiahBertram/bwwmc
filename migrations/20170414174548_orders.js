'use strict';


exports.up = function(knex, Promise) {
    return knex.schema.createTable('orders', (t) => {
        t.increments()
            .primary();
        t.string('item_1_name')
            .notNullable();
        t.integer('item_1_price')
            .notNullable();
        t.integer('item_1_quantity')
            .notNullable();
        t.string('item_2_name')
            .defaultTo('');
        t.integer('item_2_price')
            .defaultTo(0);
        t.integer('item_2_quantity')
            .defaultTo(0);
        t.string('item_3_name')
            .defaultTo('');
        t.integer('item_3_price')
            .defaultTo(0);
        t.integer('item_3_quantity')
            .defaultTo(0);
        t.string('item_4_name')
            .defaultTo('');
        t.integer('item_4_price')
            .defaultTo(0);
        t.integer('item_4_quantity')
            .defaultTo(0);
        t.string('item_5_name')
            .defaultTo('');
        t.integer('item_5_price')
            .defaultTo(0);
        t.integer('item_5_quantity')
            .defaultTo(0);
        t.string('item_6_name')
            .defaultTo('');
        t.integer('item_6_price')
            .defaultTo(0);
        t.integer('item_6_quantity')
            .defaultTo(0);
        t.integer('total')
            .notNullable();
        t.date('delivery_date')
        .notNullable();
        t.string('name')
            .notNullable();
        t.string('email')
            .notNullable();
        t.string('address')
            .notNullable();
        t.string('city')
            .notNullable();
        t.string('state')
            .notNullable();
        t.integer('zip_code')
            .notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('orders')
};
