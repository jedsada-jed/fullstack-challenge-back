const express = require('express');
const router = express.Router();
const db = require('../database/db');

const admins = require('../models/admin')

/* GET users listing. */
router.get('/', function (req, res, next) {
  admins.findAll()
    .then(data => console.log(data))
    .catch(err => console.log(err))
  res.send('respond with a resource');
});

module.exports = router;
