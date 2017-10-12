"use strict";


exports.up = function(knex, Promise) {
    return knex.schema.createTable('orders', (t) => {
        t.increments()
            .primary();
        t.string("chicken_pot_pie")
            .defaultTo('');
        t.integer("chicken_pot_pie_price")
            .defaultTo();
        t.integer("chicken_pot_pie_quantity")
            .defaultTo();
        t.string("chicken_casserole")
            .defaultTo('');
        t.integer("chicken_casserole_price")
            .defaultTo();
        t.integer("chicken_casserole_quantity")
            .defaultTo();
        t.string("doggie_beef_stew")
            .defaultTo('');
        t.integer("doggie_beef_stew_price")
            .defaultTo();
        t.integer("doggie_beef_stew_quantity")
            .defaultTo();
        t.string("chicken_and_rice")
            .defaultTo('');
        t.integer("chicken_and_rice_price")
            .defaultTo();
        t.integer("chicken_and_rice_quantity")
            .defaultTo();
        t.string("vegetable_soup")
            .defaultTo('');
        t.integer("vegetable_soup_price")
            .defaultTo();
        t.integer("vegetable_soup_quantity")
            .defaultTo();
        t.string("pot_roast_with_vegetables")
            .defaultTo('');
        t.integer("pot_roast_with_vegetables_price")
            .defaultTo();
        t.integer("pot_roast_with_vegetables_quantity")
            .defaultTo();
        t.integer('total')
            .notNullable();
        t.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .index();
        t.date('delivery_date')
            .notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('orders')
};
