
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(function () {
      // Inserts seed entries
      return knex('orders').insert([
        {order_number: '4592485', order_date: '04-15-2017', order_status: 'Completed', order_total: '$45.00'},
        {order_number: '9184571', order_date: '05-11-2017', order_status: 'In Progress', order_total: '$25.37'},
        {order_number: '2924853', order_date: '06-19-2017', order_status: 'In Progress', order_total: '$18.00'},
      ]);
    });
};
