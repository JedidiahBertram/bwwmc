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
                    image_url: 'https://www.dropbox.com/s/pfdr6167y0z9c3a/chicken_pot_pie.jpg?dl=0'
                },
                {
                    item_name: 'Chicken Casserole',
                    item_ingredients: 'Chicken breasts, chopped vegetables (carrots, green beans, broccoli), chicken broth, oil',
                    item_price: '$25.00',
                    image_url: 'https://www.dropbox.com/s/gwfbuuflci4nfu1/chicken_casserole.jpg?dl=0'
                },
                {
                    item_name: 'Doggie Beef Stew',
                    item_ingredients: 'Beef stew meat, regular potatoes, sweet potatoes, carrots, water, white flour, olive oil',
                    item_price: '$30.00',
                    image_url: 'https://www.dropbox.com/s/jt4y8zjd18ins5l/doggie_beef_stew.jpg?dl=0'
                },
                {
                    item_name: 'Chicken and Rice',
                    item_ingredients: 'Ground turkey, brown rice, baby spinach, carrots, peas, zucchini, oil',
                    item_price: '$35.00',
                    image_url: 'https://www.dropbox.com/s/np7gf7cf9chxuwq/chicken_and_rice.jpg?dl=0'
                },
                {
                    item_name: 'Vegetable Soup',
                    item_ingredients: ' Sweet potatoes, russet potatoes, celery, carrots, tomatoes, red bell peppers, quinoa, coriander, parsley, basil',
                    item_price: '$27.00',
                    image_url: 'https://www.dropbox.com/s/9wg5ihmlb2th6j2/vetable_soup.jpg?dl=0'
                },
                {
                    item_name: 'Pot Roast with Vegetables',
                    item_ingredients: 'Roast, sweet potato, white potato, mushrooms, carrots, celery, coconut oil, chicken liver and parsley, oil',
                    item_price: '$45.00',
                    image_url: 'https://www.dropbox.com/s/9ag7tvspj62xvgo/pot_roast_with_vegetables.jpg?dl=0'

                }
            ]);
        });
};
