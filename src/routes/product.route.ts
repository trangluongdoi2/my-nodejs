import { Router } from 'express';
import authMiddleware from '@/middleware/auth.middleware';
import productController from '@/controllers/product.controller';

const productRouter = (router: Router) => {
  router.post('/api/product/create', productController.create);
  router.get('/api/product/:id', authMiddleware.verifyAccessToken, productController.getById);
  router.get('/api/product', authMiddleware.verifyAccessToken, productController.getAll);
  router.post('/api/product/update', authMiddleware.verifyAccessToken, productController.update);
  router.delete('/api/product/delete', authMiddleware.verifyAccessToken, productController.delete);
};

export default productRouter;
