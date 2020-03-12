import * as express from 'express'
import * as authController from '../controllers/authController'

const router = express.Router()

router.post('/profile', authController.GetProfile)
router.post('/login', authController.Login)

export default router
