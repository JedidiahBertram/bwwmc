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

//The users/new route - render the data entry page to insert a new user
router.route("/new")
    .get(function(req, res) {
        res.render("users/new");
    });



module.exports = router;
