"use strict";


exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('menu_items')
        .del()
        .then(function() {
            // Inserts seed entries
            return knex('menu_items')
                .insert([{
                        item_name: 'Chicken Pot Pie',
                        item_ingredients: 'Rice, Lentils, Quinoa, Carrots, Peas, Zucchini, Squash, Fish Oil',
                        image_url: 'http://www.keepthetailwagging.com/wp-content/uploads/2012/02/Chicken-Pot-Pie-2-500x332.jpg',
                        item_price: '$45.00'
                    },
                    {
                        item_name: 'Chicken Casserole',
                        item_ingredients: 'Chicken, Chopped Vegetables, Rolled Oats, Chicken Broth, Oil',
                        image_url: 'http://dogsaholic.com/wp-content/uploads/2015/03/Chicken-Casserole.jpg',
                        item_price: '$25.37'
                    },
                    {
                        item_name: 'Doggie Beef Stew',
                        item_ingredients: 'Beef Stew Meat, Potato, Sweet Potato, Carrots, Water, White Flour, Olive Oil',
                        image_url: 'http://dogsaholic.com/wp-content/uploads/2015/03/Doggie-beef-stew.jpg',
                        item_price: '$18.00'
                    }, {
                        item_name: 'Chicken Pot Pie',
                        item_ingredients: 'Rice, Lentils, Quinoa, Carrots, Peas, Zucchini, Squash, Fish Oil',
                        image_url: 'http://www.keepthetailwagging.com/wp-content/uploads/2012/02/Chicken-Pot-Pie-2-500x332.jpg',
                        item_price: '$45.00'
                    },
                    {
                        item_name: 'Chicken Casserole',
                        item_ingredients: 'Chicken, Chopped Vegetables, Rolled Oats, Chicken Broth, Oil',
                        image_url: 'http://dogsaholic.com/wp-content/uploads/2015/03/Chicken-Casserole.jpg',
                        item_price: '$25.37'
                    },
                    {
                        item_name: 'Doggie Beef Stew',
                        item_ingredients: 'Beef Stew Meat, Potato, Sweet Potato, Carrots, Water, White Flour, Olive Oil',
                        image_url: 'http://dogsaholic.com/wp-content/uploads/2015/03/Doggie-beef-stew.jpg',
                        item_price: '$18.00'
                    },
                ]);
        });
};
