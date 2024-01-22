import dotenv from 'dotenv';

dotenv.config();

const MYSQL_HOST = process.env.MYSQL_HOST || 'localhost';
const MYSQL_DATABASE = process.env.MYSQL_DATABASE || 'test';
const MYSQL_USER = process.env.MYSQL_USER || 'root';
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD || 'Vinhnguyen123@';
const MYSQL_PORT = process.env.MYSQL_PORT || 3306;

const MYSQL = {
  type: 'mysql',
  host: MYSQL_HOST,
  database: MYSQL_DATABASE,
  username: MYSQL_USER,
  password: MYSQL_PASSWORD,
  dbport: MYSQL_PORT,
  synchronize: true,
  logging: false,
  entities: ['src/entities/*.ts']
};

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';

// Will set up after
const SERVER_PORT = process.env.SERVER_PORT || 1337;

const SERVER = {
  hostname: SERVER_HOSTNAME,
  port: SERVER_PORT
};

const config = {
  mysql: MYSQL,
  server: SERVER
};

export default config;
