
const admins = require('../models/admin')
const SECRET = process.env.SECRET;

console.log('SECRET', SECRET)

const { Strategy, ExtractJwt } = require("passport-jwt");
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: SECRET,
}
const jwtAuth = new Strategy(jwtOptions, async (payload, done) => {
  const { sub: data } = payload;
  const admin = await admins.findOne({
    where: {
      email: data.email,
      id: data.id
    },
  });

  if (admin) done(null, true);
  else done(null, false);
});

const passport = require("passport");
passport.use(jwtAuth);

module.exports = passport.authenticate("jwt", { session: false });