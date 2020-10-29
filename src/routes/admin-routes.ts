import { Router } from 'express';
import UserAuthController from '../controllers/UserAuthController';
import adminAuthMiddleware from '../middlewares/adminAuthMiddleware';
import AdminAuthController from '../controllers/AdminAuthController';
// import UserController from '../controllers/UserController';

const router = Router();

router.post('/', AdminAuthController.signupAdmin);
router.post('/login', AdminAuthController.loginAdmin);
router.post('/logout', AdminAuthController.logoutAdmin);
router.post('/forgotPassword', AdminAuthController.forgotPassword);
router.patch('/resetPassword/:token', AdminAuthController.passwordReset);

// //protected only for logged-in users
router.use(adminAuthMiddleware.protect);
router.patch(
  '/updatePassword',
  adminAuthMiddleware.getMe,
  AdminAuthController.updatePassword
);

// router.get('/getMe', adminAuthMiddleware.getMe, UserController.getOne);
// router.patch('/updateMe', adminAuthMiddleware.getMe, UserController.updateOne);
// router.delete('/deleteMe', adminAuthMiddleware.getMe, UserController.deleteOne);

// //restricted to users with admin roles
// router.use(authMiddleware.restrictTo(UserRole.HEAD_ADMIN, UserRole.ADMIN));

// router.get('/', UserController.getAll);
// router.get('/:id', UserController.getOne);
// router.patch('/:id', UserController.updateOne);
// router.delete('/:id', UserController.deleteOne);

export default router;
