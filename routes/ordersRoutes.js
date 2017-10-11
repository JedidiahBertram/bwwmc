"use strict";


const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
// const nodemailer = require('nodemailer');//Will be used for confirmation email
let orderObj = {};

router.route("/")
    .get((req, res) => {
        knex('orders')
            .then((orders) => {
                res.render('orders/index', {
                    orders
                });
            });
    })
    .post((req, res) => {

        var orderNumber = getRandomArbitrary(1000000, 9999999);

        console.log("in the orders post route");
        for (var order in req.body) {
            let userID = req.session.userId;
            let menuItemID = req.body.menuItemID;
            let qty = req.body.quantity;
            let price = req.body.item_price;
            let recur = req.body.recurring;
            let freq = req.body.frequency;
            let totalPrice = price * qty;
            let todaysDate = new Date();
            let schedDate = req.body.schedDate;
            let currentMonth = todaysDate.getMonth() + 1;

            orderObj = {
                "order_number": orderNumber,
                "order_date": currentMonth + '-' + todaysDate.getDate() + '-' + todaysDate.getFullYear(),
                "order_status": "In Progress",
                "order_total": totalPrice,
                "user_id": userID,
                "delivery_date": schedDate
            }

            console.log('todays date = ', orderObj.order_date);

            knex('orders')
                .insert(orderObj)
                .returning("id")
                .then(function(id) {
                    let orderMenuItemsObj = {
                        "order_id": parseInt(id),
                        "menu_item_id": parseInt(menuItemID)
                    }
                    knex('order_menu_items')
                        .insert(orderMenuItemsObj)
                        .returning("id")
                        .then(function(id) {
                            console.log('orderMenuItemsID = ', id);
                        })
                })


            res.render("orders/orderSchedule", {
                orderObj
            });
        }

        function getRandomArbitrary(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }


        //WILL BE USED FOR CONFIRMATION EMAIL
        // .returning('id')
        // .then((id) => {
        //     // create reusable transporter object using the default SMTP transport
        //     let transporter = nodemailer.createTransport({
        //         service: 'gmail',
        //         auth: {
        //             user: 'chowconfirmation@gmail.com',
        //             pass: 'bowwowwheresmychow'
        //         }
        //     });
        //     // setup email data with unicode symbols
        //     let mailOptions = {
        //         from: '"BWWMC" <chowconfirmation@gmail.com>', // sender address
        //         to: 'bar@blurdybloop.com' // list of receivers
        //         subject: 'BWWMC Order Confirmation', // Subject line
        //         text: "Thank you for your order!", // plain text body
        //         html: '<b>Thank you for your order!</b>' // html body
        //     };
        //     // send mail with defined transport object
        //     transporter.sendMail(mailOptions, (error, info) => {
        //         if (error) {
        //             return console.log(error);
        //         }
        //         console.log('Message %s sent: %s', info.messageId, info.response);
        //     });
        // })
        // .catch((err) => {
        //     console.log(err);
        // });


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
            });
    });

router.route("/delete")
    .get(function(req, res) {
        res.render("orders/delete");
    });

router.route("/order_pay")
    .get(function(req, res) {
        res.render("orders/order_pay");
    })

//http://localhost:3000/orders/order/orderData
router.route("/order/orderData")
    .get(function(req, res) {
        res.render("orders/orderSchedule", {
            orderObj
        })
    })
router.route("/order_confirmation")
    .get(function(req, res) {
        res.render("orders/order_confirmation")
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
                        res.render('orders', {
                            orders
                        });
                    });
            });
    });

module.exports = router;
