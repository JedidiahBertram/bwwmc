"use strict";


const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

//Get's all of the menu items
router.route("/")

    .get((req, res) => {
        console.log('user = ', req.session.userId);
        knex('menu_items')
            .then((items) => {
                res.render('menu_items/index', {
                    items
                });
            });
    });




module.exports = router;
