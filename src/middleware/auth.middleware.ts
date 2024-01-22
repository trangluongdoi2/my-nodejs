import { NextFunction, Request, Response } from 'express';

const authMiddleware = {
  verifyAccessToken: async (req: Request, res: Response, next: NextFunction) => {
    console.log('verifyAccessToken....');
    next();
  },

  verifyRefreshToken: async (req: Request, res: Response, next: NextFunction) => {
    console.log('verifyRefreshToken...');
    next();
  }
};

export default authMiddleware;
