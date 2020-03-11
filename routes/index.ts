import * as express from 'express'
import auth from './auth'
import admin from './admin'
import product from './product'

const router = express.Router()

router.use('/auth', auth)
router.use('/admin', admin)
router.use('/product', product)

export default router
