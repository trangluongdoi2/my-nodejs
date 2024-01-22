import { DataSource } from 'typeorm';
import logger from './config/logger';
import config from './config/config';
import app from './config/express';
import { User } from './entities/user.entities';

const PORT = process.env.PORT || 3000;

// @ts-ignore
const appDataSource = new DataSource(config.mysql);
export const Manager = appDataSource.manager;

appDataSource
  .initialize()
  .then(() => {
    logger.info('Database connection created');
    app.listen(PORT, () => {
      logger.info(`Server running at ${PORT}`);
    });
  })
  .catch((error: Error) => {
    logger.info(`Database connection failed with error ${error}`);
  });

export default appDataSource;

export const userRepository = appDataSource.getRepository(User);
// export const userQueryBuilder = userRepository.createQueryBuilder();
