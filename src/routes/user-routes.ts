import { Router } from 'express';
import UserAuthController from '../controllers/UserAuthController';
import userAuthMiddleware from '../middlewares/userAuthMiddleware';
import UserController from '../controllers/UserController';
import adminAuthMiddleware from '../middlewares/adminAuthMiddleware';
import { AdminRoles } from '../entity/Admin';
// import { UserRole } from '../entity/User';

const router = Router();

router.post('/login', UserAuthController.loginUser);
router.post('/logout', UserAuthController.logoutUser);
router.post('/forgotPassword', UserAuthController.forgotPasswordUser);
router.patch('/resetPassword/:token', UserAuthController.passwordResetUser);

//admin protected creates user
router.post('/signup', UserAuthController.signupUser);

//admin protected get all users
router.get(
  '/',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(
    AdminRoles.superAdmin,
    AdminRoles.admin,
    AdminRoles.mechanic
  ),
  UserController.getMany
);

router.get(
  '/count',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(
    AdminRoles.superAdmin,
    AdminRoles.admin,
    AdminRoles.mechanic
  ),
  UserController.getCount
);

router.post(
  '/',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(
    AdminRoles.superAdmin,
    AdminRoles.admin,
    AdminRoles.mechanic
  ),
  UserController.createOne
);

router.use(userAuthMiddleware.isLoggedIn);
router.patch(
  '/updatePassword',
  userAuthMiddleware.getMe,
  UserAuthController.updatePasswordUser
);

router.get(
  '/getMe',
  userAuthMiddleware.isLoggedIn,
  userAuthMiddleware.getMe,
  UserController.getOne
);
// //protected only for logged-in users
// router.patch('/updateMe', authMiddleware.getMe, UserController.updateOne);
// router.delete('/deleteMe', authMiddleware.getMe, UserController.deleteOne);

//admin protected get one user
router.get(
  '/:id',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(
    AdminRoles.superAdmin,
    AdminRoles.admin,
    AdminRoles.mechanic
  ),
  UserController.getOne
);

export default router;
