const router = require('express').Router();

router.use('/auth', require('./auth'));
router.use('/admin', require('./admin'));
router.use('/product', require('./product'));

module.exports = router;
