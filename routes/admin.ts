import * as express from 'express'
import * as adminController from '../controllers/adminController'

const router = express.Router()

router.get('/', adminController.GetAdmin)

export default router
