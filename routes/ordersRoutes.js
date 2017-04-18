"use strict";


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
        knex('orders')
            .insert(req.body.order)
            .returning('id')
            .catch((err) => {
                console.log(err);
            })
    })
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

//The users/new route - render the data entry page to insert a new user
router.route("/new")
    .get(function(req, res) {
        res.render("orders/new");
    });

router.route("/update")
    .get(function(req, res) {
        res.render("orders/update");
    });

router.route("/delete")
    .get(function(req, res) {
        res.render("orders/delete");
    });

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
    .delete(function(req, res) {
        console.log("In the delete order route");

        knex('orders')
            .where('id', '=', req.body.order.id)
            .del()
            .returning("id")
            .then((orders) => {
                knex('orders')
                    .then((orders) => {
                        //console.log(users);
                        res.render('orders', {
                            orders
                        });
                    });
            });

    })

module.exports = router;
