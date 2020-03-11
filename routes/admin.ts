import * as express from 'express'
import admins from '../models/admin'
import AdminModel from '../models/admin'

const router = express.Router()

router.get('/', async (req: express.Request, res: express.Response) => {
  const dataRaw: AdminModel[] = await admins.findAll()

  const data = dataRaw.map((item: AdminModel) => ({
    id: item.id,
    firstName: item.firstName,
    lastName: item.lastName,
    email: item.email,
    password: null,
    salt: null,
    createdAt: item.createdAt,
    updatedAt: item.updatedAt,
  }))

  res.json(data)
})

export default router
