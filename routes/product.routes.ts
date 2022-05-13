import { Router } from 'express';
import ProductController from '../src/controllers/product.controller';
import productValidate from '../src/controllers/middlewares/productvalidate';

const router = Router();

const productController = new ProductController();

router.get('/', productController.getAll);
router.post('/', productValidate, productController.create);

export default router;