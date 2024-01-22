import { User } from '../entities/user.entities';
import { userRepository } from '../db-connector';

const createUser = async (input: { username: string, password: string }) => {
  try {
    const data = await userRepository.save(input);
    console.log(data, 'data..');
    return data;
  } catch (error) {
    return null;
  }
};

const loginUser = async (input: Record<string, any>) => {
  try {
    const user = await userRepository.findOneBy({
      email: input.email
    });
  } catch (error) {
    return null;
  }
};

const deleteAllUser = async (input: any) => {
  try {
    // const res = await userRepository.delete()
  } catch (error) {
    console.error('error');
  }
}

export { createUser };
