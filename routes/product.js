const express = require('express');
const router = express.Router();

const product = require('../models/product')
const checkAuth = require('../config/passport')

router.get('/', checkAuth, async (req, res, next) => {
  const data = await product.findAll()
  res.json(data);
});

router.get('/:id', async (req, res, next) => {
  const data = await product.findOne({
    where: {
      id: req.params.id
    },
  });
  res.json(data);
});

// TODO
router.post('/', async (req, res, next) => {
  const { title, description, price } = req.body
  const data = await product.create({
    title,
    description,
    price,
    createdAt: new Date(),
    updatedAt: new Date()
  }, null);

  res.json(data);
});


module.exports = router;
