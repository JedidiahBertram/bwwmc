"use strict";


exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('menu_items')
        .del()
        .then(function() {
            // Inserts seed entries
            return knex('menu_items')
                .insert([{
                        item_name: 'Signature Chow',
                        item_ingredients: 'Venison, Offal, Oats, Corn, Barley, Vitamin A, Vitamin E',
                        item_price: '$45.00'
                    },
                    {
                        item_name: 'Doggie Knows Best',
                        item_ingredients: 'Chicken, Oats, Rice, Vitamin A, Vitamin E, Vitamin D',
                        item_price: '$25.37'
                    },
                    {
                        item_name: 'Tasty Milkbone',
                        item_ingredients: 'Offal, Potatoes, Corn, Tyme, Vitamin C, Vitamin D',
                        item_price: '$18.00'
                    },
                ]);
        });
};
