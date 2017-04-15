const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.route("/")


router.route("/")
    .get(function(req, res) {
        console.log('In the users get route');
        //res.render('In the users get route');
    })
    .post(function(req, res) {
        console.log('In the users post route');
        //res.render('In the users route');

    })

    .put(function(req, res) {

    })


module.exports = router;
