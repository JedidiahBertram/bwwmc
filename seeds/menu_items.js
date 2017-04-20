exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('menu_items')
        .del()
        .then(function() {
            // Inserts seed entries
            return knex('menu_items').insert([{
                    item_name: 'Chicken Pot Pie',
                    item_ingredients: 'Chicken, rice, lentils, quinoa, carrots, peas, shredded zucchini, squash, cranberries, oil',
                    item_price: '$30.00',
                    image_url: 'http://i.imgur.com/3ueAQ0o.jpg'
                },
                {
                    item_name: 'Chicken Casserole',
                    item_ingredients: 'Chicken breasts, chopped vegetables (carrots, green beans, broccoli), chicken broth, oil',
                    item_price: '$25.00',
                    image_url: 'http://i.imgur.com/PP6AsbL.jpg'
                },
                {
                    item_name: 'Doggie Beef Stew',
                    item_ingredients: 'Beef stew meat, regular potatoes, sweet potatoes, carrots, water, white flour, olive oil',
                    item_price: '$30.00',
                    image_url: 'http://i.imgur.com/6rKBsF5.jpg'
                },
                {
                    item_name: 'Chicken and Rice',
                    item_ingredients: 'Ground turkey, brown rice, baby spinach, carrots, peas, zucchini, oil',
                    item_price: '$35.00',
                    image_url: 'http://i.imgur.com/ybfIZfP.jpg'
                },
                {
                    item_name: 'Vegetable Soup',
                    item_ingredients: ' Sweet potatoes, russet potatoes, celery, carrots, tomatoes, red bell peppers, quinoa, coriander, parsley, basil',
                    item_price: '$27.00',
                    image_url: 'http://i.imgur.com/O7xbGqo.jpg'
                },
                {
                    item_name: 'Pot Roast with Vegetables',
                    item_ingredients: 'Roast, sweet potato, white potato, mushrooms, carrots, celery, coconut oil, chicken liver and parsley, oil',
                    item_price: '$45.00',
                    image_url: 'http://i.imgur.com/npuXnAd.jpg'

                }
            ]);
        });
};
