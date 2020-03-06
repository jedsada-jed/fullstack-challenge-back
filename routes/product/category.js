const express = require('express');
const router = express.Router();

const category = require('../../models/product/category')

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const data = await category.findAll();
  res.json(data);
});

module.exports = router;
