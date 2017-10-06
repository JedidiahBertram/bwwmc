"use strict";


const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

//Get's all of the menu items and makes them avaiable to EJS
router.route("/")
    .get((req, res) => {
        knex('menu_items')
            .then((items) => {
                res.render('menu_items/index', {
                    items
                });
            });
    });


module.exports = router;
