import * as express from 'express'
import * as bcrypt from 'bcrypt'
import * as jwt from "jwt-simple"
import admins from '../models/admin'

export const GetProfile = (req: express.Request, res: express.Response) => {
  var jwtToken = jwt.decode(req.headers.authorization || '', process.env.SECRET || '')
  res.json({ data: jwtToken.sub })
}

export const Login = async (req: express.Request, res: express.Response) => {
  const admin = await admins.findOne({
    where: {
      email: req.body.email,
    },
  })
  console.log('admin', admin)

  if (!admin) return res.status(401).send('Unauthorized')

  const hashPwd = await bcrypt.hashSync(req.body.password, admin.salt)
  if (hashPwd != admin.password) return res.status(401).send('Unauthorized')

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
  }
  const token = jwt.encode(payload, process.env.SECRET || '')
  res.json({ token })
}
