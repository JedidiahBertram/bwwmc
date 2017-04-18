"use strict";


exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('order_menu_items')
        .del()
        .then(function() {
            // Inserts seed entries
            return knex('order_menu_items')
                .insert([{
                        order_id: '1',
                        menu_item_id: '1'
                    },
                    {
                        order_id: '2',
                        menu_item_id: '3'
                    },
                    {
                        order_id: '3',
                        menu_item_id: '1'
                    },
                ]);
        });
};
