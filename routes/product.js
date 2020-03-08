const express = require('express');
const router = express.Router();

const product = require('../models/product')
const checkAuth = require('../config/passport')

router.get('/', checkAuth, async (req, res, next) => {
  try {
    const data = await product.findAll()
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const data = await product.findOne({
      where: {
        id: req.params.id
      },
    });
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { title, description, price } = req.body
    const data = await product.create({
      title,
      description,
      price,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const { title, description, price } = req.body
    const data = await product.upsert({
      id: req.params.id,
      title,
      description,
      price,
      updatedAt: new Date()
    });
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const res = await product.destroy({
      where: {
        id: req.params.id
      },
    });
    res.json({ data: res == 1 });
  } catch (err) {
    console.log(err);
    res.status(500);
  }
});


module.exports = router;
