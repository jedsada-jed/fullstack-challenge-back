const express = require('express');
const admins = require('../models/admin');
const checkAuth = require('../config/passport')

const router = express.Router();

router.get('/', checkAuth, async (req, res, next) => {
  const dataRaw = await admins.findAll();
  const data = dataRaw.map(item => ({
    id: item.id,
    firstName: item.firstName,
    lastName: item.lastName,
    email: item.email,
    createdAt: item.createdAt,
    updatedAt: item.updatedAt,
  }));
  res.json(data);
});

module.exports = router;
