const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.route("/")
.post('/', (req, res) => {
  // knex('orders')
})







module.exports = router;
