const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.route("/")
    .get((req, res) => {
        knex('orders')
            .then((orders) => {
                res.render('orders/index', {
                    orders
                })
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


//ALl the single order routes (update, delete, show, etc.)
//Must be at the bottom of the file to avoid route
//interception
router.route("/:orderID")
    .get(function(req, res) {
        console.log('Get single order route');

        knex('orders')
            .where("id", req.params.orderID)
            .then((order) => {
                console.log(order);
                //res.send(order);
                res.render('orders/show', {
                    order_number: order[0].order_number,
                    order_date: order[0].order_date,
                    order_status: order[0].order_status,
                    order_total: order[0].order_total,
                    user_id: order[0].user_id,
                    delivery_date: order[0].delivery_date
                });
            }) //end then
            .catch((err) => {
                //console.log(user[0]);
                console.log(err);
            });
    })


module.exports = router;
