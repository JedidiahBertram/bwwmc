
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {item_name: 'Signature Chow', item_ingredients: 'Venison, Offal, Oats, Corn, Barley, Vitamin A, Vitamin E'},
        {item_name: 'Doggie Knows Best', item_ingredients: 'Chicken, Oats, Rice, Vitamin A, Vitamin E, Vitamin D'},
        {item_name: 'Tasty Milkbone', item_ingredients: 'Offal, Potatoes, Corn, Tyme, Vitamin C, Vitamin D'},
      ]);
    });
};
