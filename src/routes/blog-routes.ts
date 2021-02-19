import { Router } from 'express';
import BlogController from '../controllers/BlogController';
import { AdminRoles } from '../entity/Admin';
import adminAuthMiddleware from '../middlewares/adminAuthMiddleware';
import userAuthMiddleware from '../middlewares/userAuthMiddleware';

const router = Router();
//-------------------------------------------------------------------------
router.get(
  '/',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(AdminRoles.superAdmin, AdminRoles.blogger),
  BlogController.getPage
);

//-------------------------------------------------------------------------
router.post(
  '/',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(AdminRoles.superAdmin, AdminRoles.blogger),
  BlogController.create
);

//-------------------------------------------------------------------------
router.get(
  '/count',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(AdminRoles.superAdmin, AdminRoles.blogger),
  BlogController.count
);

//-------------------------------------------------------------------------
router.get(
  '/:id',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(AdminRoles.superAdmin, AdminRoles.blogger),
  BlogController.getOne
);

//-------------------------------------------------------------------------
router.put(
  '/:id',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(AdminRoles.superAdmin, AdminRoles.blogger),
  BlogController.updateOne
);

//-------------------------------------------------------------------------
router.patch(
  '/:id/publish',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(AdminRoles.superAdmin, AdminRoles.blogger),
  BlogController.publish
);

//-------------------------------------------------------------------------
router.delete(
  '/:id',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(AdminRoles.superAdmin, AdminRoles.blogger),
  BlogController.deleteOne
);

export default router;
