import { Router } from 'express';
import UserAuthController from '../controllers/UserAuthController';
import adminAuthMiddleware from '../middlewares/adminAuthMiddleware';
import AdminAuthController from '../controllers/AdminAuthController';
import { AdminRoles } from '../entity/Admin';

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

router.get(
  '/getCurrentAdmin',
  adminAuthMiddleware.protect,
  AdminAuthController.getCurrentAdmin
);

// router.get('/getMe', adminAuthMiddleware.getMe, AdminAuthController.getOne);
// router.patch('/updateMe', adminAuthMiddleware.getMe, AdminAuthController.updateOne);
// router.delete('/deleteMe', adminAuthMiddleware.getMe, AdminAuthController.deleteOne);

router.use(
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(AdminRoles.superAdmin, AdminRoles.admin)
);

router.get('/', AdminAuthController.getAll);
// router.get('/:id', AdminAuthController.getOne);
router.patch('/:id', AdminAuthController.updateOne);
router.patch('/:id/updatePassword', AdminAuthController.updateAdminPassword);
// router.delete('/:id', AdminAuthController.deleteOne);

export default router;
