
import * as passport from 'passport'
import admins from '../models/admin'
import AdminModel from '../models/admin'
import { Strategy, ExtractJwt } from "passport-jwt"

const SECRET: string | undefined = process.env.SECRET
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: SECRET,
}

const jwtAuth: any = new Strategy(
  jwtOptions,
  async (payload: any, done: Function) => {
    const admin: AdminModel | null = await admins.findOne({
      where: {
        email: payload.sub.email,
        id: payload.sub.id
      },
    })

    if (admin) done(null, true)
    else done(null, false)
  })

passport.use(jwtAuth)
// passport.authenticate("jwt", { session: false })
