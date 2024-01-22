import { Request, Response } from 'express';

const productController = {
  create: async (req: Request, res: Response) => {
    return res.status(200).send('create productController...');
  },

  delete: async (req: Request, res: Response) => {
    return res.status(200).send('delete productController...');
  },

  update: async (req: Request, res: Response) => {
    return res.status(200).send('update productController...');
  },

  getAll: async (req: Request, res: Response) => {
    return res.status(200).send('getAll productController...');
  },

  getById: async (req: Request, res: Response) => {
    return res.status(200).send('getById productController...');
  }
}

export default productController;
