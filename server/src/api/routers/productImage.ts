import { Router } from 'express';
import productImageController from '../controllers/productImage';

const router = Router();

router.get('/:productId', productImageController.getAll);

export default router;
