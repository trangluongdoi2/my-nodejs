import express from 'express';
import { Request, Response } from 'express';
import * as bodyParser from 'body-parser';
import userRouter from '../routes/user.route';

const morgan = require('morgan');

const app = express();
require('dotenv').config();

app.use(morgan('dev'));
app.use(bodyParser.json());
userRouter(app);

app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Hello Node Js</h1>')
});
export default app;