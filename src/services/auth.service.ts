import appDataSource from '@/db-connector';
import { User } from '@/entities/user.entities';

const authService = {
  createUser: async ({ userName, email, password }: Record<string, any>) => {
    const repository = appDataSource.getRepository(User);
    try {
      const input = {
        userName,
        email,
        password
      };
      return await repository.save(input);
    } catch (error) {
      return null;
    }
  },

  login: async ({ email, password }: any) => {
    const repository = appDataSource.getRepository(User);
    try {
      const user = await repository.findOneBy({ email });
      if (user) {
        return 'Hello';
      }
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
