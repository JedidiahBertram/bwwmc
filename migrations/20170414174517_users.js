"use strict";


exports.up = function(knex, Promise) {
    return knex.schema.createTable("users", function(table) {
        table.increments()
            .primary();
        table.string("password")
            .notNullable()
            .defaultTo('');
        table.string("first_name")
            .defaultTo('');
        table.string("last_name")
            .defaultTo('');
        table.string("phone")
            .defaultTo('');
        table.string("email")
            .notNullable()
            .defaultTo('');
        table.string("address")
            .defaultTo('');
        table.string("city")
            .defaultTo('');
        table.string("state")
            .defaultTo('');
        table.string("zip")
            .defaultTo('');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
    //ALTER SEQUENCE orders_id_seq RESTART WITH 1;
    //knex.schema.raw(resetSequenceCommand)

};

function resetUserSequence() {

};
