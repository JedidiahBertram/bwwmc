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
        knex('users').insert(req.body.user)
            .returning('id')
            .catch((err) => {
                console.log(err);
            })

    })

//The users/new route - render the data entry page to insert a new user
//called via http://localhost:3000/users/new
router.route('/new')
    .get((req, res) => {
        res.render('users/new');
    });
//Update a user route
//Called via http://localhost:3000/users/edit
router.route('/edit')
    .get((req, res) => {
        res.render("users/edit");
    });

router.route('/delete')
    .get((req, res) => {
        res.render("users/delete");
    });

//Routes specific to one user
router.route('/:user_id')
    .get((req, res) => {
        console.log(req.params);

        knex('users')
            .where("id", req.params.user_id)
            .then((user) => {
                res.render('users/show', {
                    user_id: user[0].user_id,
                    full_name: user[0].full_name,
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
        console.log('In the single user PUT route for ' + JSON.stringify(req.body.user_id));

        knex('users')
            .where('id', '=', req.body.user.user_id)
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
        knex('users')
            .where('id', req.body.user.user_id)
            .del()
            .then(() => {
                res.redirect('/home')
            });
    });



module.exports = router;
