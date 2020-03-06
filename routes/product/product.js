const express = require('express');
const router = express.Router();

const product = require('../../models/product/product')
const category = require('../../models/product/category')

router.get('/', async (req, res, next) => {
  const data = await product.findAll({
    where: { id: [1, 2, 3] },
    // include: [{
    //   model: category,
    //   through: {
    //     attributes: ['createdAt'],
    //     where: { completed: true }
    //   } 
    // }]
  })
  res.json(data);
});

router.post('/', async (req, res, next) => {
  console.log('req');
  const data = await product.findAll({
    where: { id: [1, 2, 3] },
    // include: [{
    //   model: category,
    //   through: {
    //     attributes: ['createdAt'],
    //     where: { completed: true }
    //   } 
    // }]
  })
  res.json(data);
});


module.exports = router;
