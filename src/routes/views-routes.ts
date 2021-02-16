import { Router } from 'express';
import ViewsController from '../controllers/ViewsController';
import authMiddleware from '../middlewares/userAuthMiddleware';

const router = Router();

router.use(authMiddleware.isLoggedIn);

router.get('/', ViewsController.home);
router.get('/ugradnjaplina', ViewsController.ugradnjaplina);
router.get('/slepsluzba', ViewsController.slep);
router.get('/automehanicarskeusluge', ViewsController.mehanika);
router.get('/eservisnaknjizica', ViewsController.eknjizica);
router.get('/userlogin', ViewsController.userlogin);
router.get('/blog', ViewsController.blog);
router.get('/blog/:slug', ViewsController.blogContent);

export default router;
