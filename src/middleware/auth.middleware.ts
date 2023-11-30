import { NextFunction, Request } from 'express';

const authMiddleware = {
  verifyAccessToken: async (req: any, res: Request, nex: NextFunction) => {
    console.log('verifyAccessToken....');
  },

  verifyRefreshToken: async (req: any, res: Request, nex: NextFunction) => {
    console.log('verifyRefreshToken...');
  }
};

export default authMiddleware;
