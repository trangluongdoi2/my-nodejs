import express from 'express';
import * as bodyParser from 'body-parser';
import authRouter from '../routes/auth.route';
const morgan = require('morgan');

const app = express();
require('dotenv').config();

app.use(morgan('dev'));
app.use(bodyParser.json());
authRouter(app);

export default app;
