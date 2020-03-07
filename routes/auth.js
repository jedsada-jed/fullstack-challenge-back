const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const admins = require('../models/admin')
const jwt = require("jwt-simple");
const checkAuth = require('../config/passport')

router.post('/profile', checkAuth, (req, res) => {
  var { sub: data } = jwt.decode(req.headers.authorization, process.env.SECRET);
  res.json({ data });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const admin = await admins.findOne({
    where: {
      email,
    },
  });

  if (!admin) return res.send(401, { error: 'Unauthorized' });

  const hashPwd = await bcrypt.hashSync(password, admin.salt);
  if (hashPwd != admin.password) return res.send(401, { error: 'Unauthorized' });

  const sub = {
    id: admin.id,
    firstName: admin.firstName,
    lastName: admin.lastName,
    email: admin.email,
  }
  const payload = {
    sub,
    iat: new Date().getTime(),
    exp: Math.floor(Date.now() / 1000) + (60 * 60), // 1 hr
  };
  const token = jwt.encode(payload, process.env.SECRET);
  res.json({ token });
});

module.exports = router;
