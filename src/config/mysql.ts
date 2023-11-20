import { DataSource } from 'typeorm';
import config from './config';

const params = {
  type: 'mysql',
  host: config.mysql.host,
  port: config.mysql.dbport,
  username: config.mysql.username,
  password: config.mysql.password,
  database: config.mysql.database
}

console.log(params, 'params....')

// const Connect = async () => {
//   return new Promise<any>((resolve: any, reject: any) => {
//     const connection = new DataSource(params);
//   })
// }