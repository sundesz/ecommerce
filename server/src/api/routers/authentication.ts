import { Router } from 'express';
import authenticationController from '../controllers/authentication';

const router = Router();

router.post('/login', authenticationController.login);
router.post('/logout', authenticationController.logout);

export default router;
