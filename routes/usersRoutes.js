"use strict";


const express = require('express');
const router = express.Router();
const knex = require('../db/knex');


router.route('/')
    .get((req, res) => {
        knex('users')
            .then((allUsers) => {
                res.render('users/index', {
                    users: allUsers
                });
            })
    })

    .post((req, res) => {
        knex('users')
            .insert(req.body.user)
            .returning('id')
            .catch((err) => {
                console.log(err);
            })

    })
//The users/new route - render the data entry page to insert a new user
//called via http://localhost:3000/users/new
router.route('/new')
    .get((req, res) => {
        console.log("In the user new route");
        res.render('users/new');
    });
//Update a user route
//Called via http://localhost:3000/users/user_id/edit
router.route('/:user_id/edit')
    .get((req, res) => {
        console.log("In the user edit route");
        // make our knex call
        knex('users')
            .where('id', req.params.user_id)
            .then((users) => {
                res.render("users/edit", {
                    user: users[0]
                });


            })

    });

router.route('/:user_id/delete')
    // var userId = parseInt(req.params.user_id, 10);
    .get((req, res) => {
        console.log("In the user delete route");
        res.render("users/delete", {
            id: req.params.user_id
        });
    });



//Routes specific to one user
router.route('/:user_id')
    .get((req, res) => {
        console.log(req.params);

        knex('users')
            .where("id", req.params.user_id)
            .then((user) => {

                res.render('users/show', {
                    first_name: user[0].first_name,
                    last_name: user[0].last_name,
                    phone: user[0].phone,
                    email: user[0].email,
                    address: user[0].address,
                    city: user[0].city,
                    state: user[0].state,
                    zip: user[0].zip
                });
            }) //end then
            .catch((err) => {
                //console.log(user[0]);
                console.log(err);
            });
    })

    .put((req, res) => {

        console.log('In the single user PUT route for ' + JSON.stringify(req.body.user.email));

        const specificId = parseInt(req.params.user_id, 10);
        knex('users')
            .where('email', '=', req.body.user.email)
            .update(req.body.user)
            .returning('id')
            .then((id) => {
                res.redirect(`/users/${id}`);
            })
            .catch((err) => {
                console.log(err);
            })

    })

    .delete((req, res) => {
        const specificId = parseInt(req.params.user_id, 10);
        knex('users')
            .where('id', '=', specificId)
            .del()
            .then(() => {
                res.redirect('/')
            });
    });



module.exports = router;
