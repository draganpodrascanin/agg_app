import { Router } from 'express';
import ExpenceController from '../controllers/ExpenseController';
import { AdminRoles } from '../entity/Admin';
import adminAuthMiddleware from '../middlewares/adminAuthMiddleware';

const router = Router({ mergeParams: true });

router.get(
  '/:id',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(AdminRoles.admin, AdminRoles.superAdmin),
  ExpenceController.getPage
);

router.get(
  '/:id',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(AdminRoles.admin, AdminRoles.superAdmin),
  ExpenceController.getOne
);

router.post(
  '/',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(AdminRoles.admin, AdminRoles.superAdmin),
  ExpenceController.create
);

router.patch(
  '/:id',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(AdminRoles.admin, AdminRoles.superAdmin),
  ExpenceController.updateOne
);

router.delete(
  '/:id',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(AdminRoles.admin, AdminRoles.superAdmin),
  ExpenceController.deleteOne
);

export default router;
