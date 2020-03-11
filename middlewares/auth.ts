import * as express from 'express'
import * as passport from 'passport'

const listWithoutAuth = ['/auth/login'];

export const authMiddleware = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  if (listWithoutAuth.includes(req.path)) next()
  else {
    passport.authenticate('jwt', { session: false })(req, res, next)
  }
}