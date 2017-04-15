const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.route("/")


router.route("/")
    // .get(function(req, res) {
    //     console.log('In the users get route');
    //     //res.render('In the users get route');
    // })
    .post(function(req, res) {
        console.log('In the users post route');
        //res.render('In the users route');
        knex('users').insert(req.body.user)
            .returning('id')
            // .then(function(id) {
            //     res.redirect('/users/${id}')
            // })
            .catch(function(err) {
                console.log(err);
            })

    })

//The users/new route - render the data entry page to insert a new user
//called via http://localhost:3000/users/new
router.route("/new")
    .get(function(req, res) {
        res.render("users/new");
    });

router.route("/edit")
    .get(function(req, res) {
        res.render("users/edit");
    });

router.route('/:user_id')
    .get(function(req, res) {
        //console.log('Get single user route');
        console.log(req.params);

        knex('users')
            .where("id", req.params.user_id)
            .then((user) => {
                //console.log(user);
                //res.send(user);
                res.render('users/show', {
                    user_id: user[0].user_id,
                    full_name: user[0].full_name,
                    phone: user[0].phone,
                    email: user[0].email,
                    address: user[0].address,
                    city: user[0].city,
                    state: user[0].state,
                    zip: user[0].zip

                    // user_name: user[0].password,
                    // img_url: user[0].full_name.
                });
            }) //end then
            .catch((err) => {
                //console.log(user[0]);
                console.log(err);
            });
    })

    .put(function(req, res) {
        console.log('In the single user PUT route for ' + JSON.stringify(req.body.user_id));

        knex('users')
            .where('id', '=', req.body.user.user_id)
            .update(req.body.user)
            .returning("id")
            .then(function(id) {
                res.redirect(`/users/${id}`);
            })
            .catch(function(err) {
                console.log(err);
            });

    })



module.exports = router;
