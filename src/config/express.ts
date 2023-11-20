import express from 'express';
import { Request, Response } from 'express';
import * as bodyParser from 'body-parser';
const morgan = require('morgan');

const app = express();
require('dotenv').config();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Hello Node Js</h1>')
});
export default app;