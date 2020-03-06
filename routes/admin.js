const express = require('express');
const router = express.Router();
const db = require('../database/db');

const admins = require('../models/admin')

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const data = await admins.findAll();
  res.json(data);
});

module.exports = router;
