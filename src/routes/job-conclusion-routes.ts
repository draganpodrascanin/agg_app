import { Router } from 'express';
import JobConclusionController from '../controllers/JobConclusionController';
import { AdminRoles } from '../entity/Admin';
import adminAuthMiddleware from '../middlewares/adminAuthMiddleware';
const router = Router();

router.get(
  '/',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(
    AdminRoles.admin,
    AdminRoles.superAdmin,
    AdminRoles.mechanic
  ),
  JobConclusionController.getPage
);
router.get(
  '/count',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(
    AdminRoles.admin,
    AdminRoles.superAdmin,
    AdminRoles.mechanic
  ),
  JobConclusionController.count
);

router.get(
  '/:id',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(
    AdminRoles.admin,
    AdminRoles.superAdmin,
    AdminRoles.mechanic
  ),
  JobConclusionController.getOne
);

router.post(
  '/',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(
    AdminRoles.admin,
    AdminRoles.superAdmin,
    AdminRoles.mechanic
  ),
  JobConclusionController.create
);

router.patch(
  '/:id',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(AdminRoles.admin, AdminRoles.superAdmin),
  JobConclusionController.updateOne
);

router.delete(
  '/:id',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(AdminRoles.admin, AdminRoles.superAdmin),
  JobConclusionController.deleteOne
);

export default router;
