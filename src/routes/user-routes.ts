import { Router } from 'express';
import AuthController from '../controllers/AuthController';
import authMiddleware from '../middlewares/authMiddleware';
import UserController from '../controllers/UserController';
// import { UserRole } from '../entity/User';

const router = Router();

router.post('/', AuthController.signupUser);
router.post('/login', AuthController.loginUser);
router.post('/logout', AuthController.logoutUser);
router.post('/forgotPassword', AuthController.forgotPasswordUser);
router.patch('/resetPassword/:token', AuthController.passwordResetUser);
//v JUST FOR DEVELOPMENT AND TESTING PURPOSE DELETE THIS v
// router.post('/createAdmin', AuthController.createAdmin);
// //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// //protected only for logged-in users
router.use(authMiddleware.protect);
router.patch(
  '/updatePassword',
  authMiddleware.getMe,
  AuthController.updatePasswordUser
);
// router.get('/getMe', authMiddleware.getMe, UserController.getOne);
// router.patch('/updateMe', authMiddleware.getMe, UserController.updateOne);
// router.delete('/deleteMe', authMiddleware.getMe, UserController.deleteOne);

// //restricted to users with admin roles
// router.use(authMiddleware.restrictTo(UserRole.HEAD_ADMIN, UserRole.ADMIN));

// router.get('/', UserController.getAll);
// router.get('/:id', UserController.getOne);
// router.patch('/:id', UserController.updateOne);
// router.delete('/:id', UserController.deleteOne);

export default router;
