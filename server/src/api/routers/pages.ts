import { Router } from 'express';
import { isAuth } from '../../middleware';
import pageController from '../controllers/pages';

const router = Router();

router.get('/', pageController.getPage);
router.post('/', isAuth, pageController.create);

const singleRouter = Router();

singleRouter.get('/', pageController.getOnePage);
singleRouter.put('/', isAuth, pageController.update);
singleRouter.delete('/', isAuth, pageController.remove);

router.use('/:id', pageController.findByIdMiddleware, singleRouter);

export default router;
