const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.route("/")
  .get((req, res) => {
    knex('orders')
    .then((orders) => {
      res.render('orders/index', {orders})
      // res.send('yo');
    })
  })
  .post((req, res) => {
    knex('orders').insert(req.body.order)
      .returning('id')
      .catch((err) => {
        console.log(err);
      })
})

// get route goes here

.put((req, res) => {

  knex('orders')
    .where('id', '=', req.body.order.order_id)
    .update(req.body.order)
    .returning('id')
    .then((id) => {
      res.redirect(`/orders/${id}`);
    })
    .catch((err) => {
      console.log(err);
    })
})





module.exports = router;
