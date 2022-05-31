import { Router } from 'express';
import { isAuth } from '../../middleware';
import productCategoryController from '../controllers/productCategory';

const router = Router();

router.get('/', productCategoryController.getProductCategory);
router.post('/', isAuth, productCategoryController.create);

const singleRouter = Router();

singleRouter.get('/', productCategoryController.getOne);
singleRouter.put('/', productCategoryController.update);
singleRouter.delete('/', productCategoryController.remove);

router.use('/:id', productCategoryController.findByIdMiddleware, singleRouter);

export default router;
