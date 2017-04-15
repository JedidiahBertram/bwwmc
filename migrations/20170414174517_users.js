exports.up = function(knex, Promise) {
    return knex.schema.createTable("users", function(table) {
        table.increments().primary();
        table.string("user_id");
        table.string("password");
        table.string("full_name");
        table.string("phone");
        table.string("email");
        table.string("address");
        table.string("city");
        table.string("state");
        table.string("zip");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users')
};
