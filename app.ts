import './config/env'
import './config/passport'
import * as express from 'express';
import * as passport from 'passport';
import * as bodyParser from 'body-parser';
import routes from './routes'
import { authMiddleware, loggerMiddleware } from './middlewares'

const app = express();
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(loggerMiddleware);
app.use(authMiddleware);

app.use(routes)
app.listen(5000);
