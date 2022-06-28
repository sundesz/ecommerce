import { Router } from 'express';
import imageController from '../controllers/image';

const router = Router();

router.get('/:productId', imageController.getAll);

export default router;
