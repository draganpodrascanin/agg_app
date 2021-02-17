import { Router } from 'express';
import ViewsController from '../controllers/ViewsController';
import authMiddleware from '../middlewares/userAuthMiddleware';

const router = Router();

router.get(
  '/eservisnaknjizica',
  authMiddleware.protect,
  ViewsController.eknjizica
);

router.get(
  '/eservisnaknjizica/:id',
  authMiddleware.protect,
  ViewsController.eknjizicaCar
);

router.use(authMiddleware.isLoggedIn);

router.get('/', ViewsController.home);
router.get('/ugradnjaplina', ViewsController.ugradnjaplina);
router.get('/slepsluzba', ViewsController.slep);
router.get('/automehanicarskeusluge', ViewsController.mehanika);
router.get('/userlogin', ViewsController.userlogin);
router.get('/zaboravili-sifru', ViewsController.forgotpassword);
router.get('/zaboravili-sifru/:id', ViewsController.passwordReset);
router.get('/blog', ViewsController.blog);
router.get('/blog/:slug', ViewsController.blogContent);

export default router;
