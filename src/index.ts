import { DataSource } from 'typeorm';
import app from './config/express';
import logger from './config/logger';
const PORT = process.env.PORT || 3000;

export const AppDataSource = new DataSource({
  type: "mysql",
  host: 'localhost',
  port: 3306,
  username: "root",
  password: "Vinhnguyen123@",
  database: "test",
  synchronize: true,
  logging: false,
});

AppDataSource.initialize()
  .then(() => {
    logger.info('database connection created');
    app.listen(PORT, () => {
      logger.info(`Server running at ${PORT}`);
    });
  })
  .catch((error: Error) => {
    logger.info(`Database connection failed with error ${error}`);
  })