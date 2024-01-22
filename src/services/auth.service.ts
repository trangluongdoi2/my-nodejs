import appDataSource from '@/db-connector';
import bcrypt from 'bcrypt';
import { User } from '@/entities/user.entities';
import { userRepository } from '../db-connector';

const authService = {
  createUser: async ({ username, email, password }: Record<string, any>) => {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    try {
      const input = {
        username,
        email,
        password: hashPassword
      };
      return await userRepository.save(input);
    } catch (error) {
      return null;
    }
  },

  login: async ({ email, password }: any) => {
    const repository = appDataSource.getRepository(User);
    try {
      const user = await repository.findOneBy({ email });
      if (!user) {
        return {
          code: 404,
          message: 'ERROR :: User does not exists!',
          data: null
        };
      }
      if (!bcrypt.compare(password, user.password)) {
        return {
          code: 404,
          message: 'ERROR :: Password is not match!',
          data: null
        }
      }
      return {
        code: 200,
        message: 'Login successfully!',
        data: user
      };
    } catch (error) {
      return null;
    }
  },

  logout: () => {
    try {
      console.log('Logout user...');
    } catch (error) {}
  }
};

export default authService;
