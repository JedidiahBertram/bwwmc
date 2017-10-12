exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('orders')
        .del()
        .then(function() {
            // Inserts seed entries
            return knex('orders')
                .insert([{
                        user_id: 1,
                        item_1: 'Chicken Pot Pie',
                        item_1_price: '30',
                        item_1_quantity: '1',
                        item_2: 'Chicken Casserole',
                        item_2_price: '25',
                        item_2_quantity: '1',
                        item_3: 'Doggie Beef Stew',
                        item_3_price: '30',
                        item_3_quantity: '1',
                        item_4: 'Chicken and Rice',
                        item_4_price: '35',
                        item_4_quantity: '1',
                        item_5: 'Vegetable Soup',
                        item_5_price: '27',
                        item_5_quantity: '1',
                        item_6: 'Pot Roast with Vegetables',
                        item_6_price: '45',
                        item_6_quantity: '1',
                        total: '192',
                        delivery_date: '11-18-2017'
                    }
                ]);
        });
};
