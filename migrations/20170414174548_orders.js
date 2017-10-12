"use strict";


exports.up = function(knex, Promise) {
    return knex.schema.createTable('orders', (t) => {
        t.increments()
            .primary();
        t.string("item_1_name")
            .notNullable();
        t.integer("item_1_price")
            .notNullable();
        t.integer("item_1_quantity")
            .notNullable();
        t.string("item_2_name")
            .defaultTo('');
        t.integer("item_2_price")
            .defaultTo('');
        t.integer("item_2_quantity")
            .defaultTo('');
        t.string("item_3_name")
            .defaultTo('');
        t.integer("item_3_price")
            .defaultTo('');
        t.integer("item_3_quantity")
            .defaultTo('');
        t.string("item_4_name")
            .defaultTo('');
        t.integer("item_4_price")
            .defaultTo('');
        t.integer("item_4_quantity")
            .defaultTo('');
        t.string("item_5_name")
            .defaultTo('');
        t.integer("item_5_price")
            .defaultTo('');
        t.integer("item_5_quantity")
            .defaultTo('');
        t.string("item_6_name")
            .defaultTo('');
        t.integer("item_6_price")
            .defaultTo('');
        t.integer("item_6_quantity")
            .defaultTo('');
        t.date('delivery_date')
        .notNullable();
        t.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .index();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('orders')
};
