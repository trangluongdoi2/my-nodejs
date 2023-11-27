import { User } from '../entities/user.entities';
import appDataSource from '../db-connector';

const createUser = async (input: { username: string, password: string }) => {
  const repository = appDataSource.getRepository(User);
  try {
    return await repository.save(input);
  } catch (error) {
    return null;
  }
}

const loginUser = async (input: Record<string, any>) => {
  const repository = appDataSource.getRepository(User);
  try {
    // const user = await repository.findOneBy({
    //   email: input.email,
    // })
  } catch (error) {
    
  }
}

export {
  createUser,
}