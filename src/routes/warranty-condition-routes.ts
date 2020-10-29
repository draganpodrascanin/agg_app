import { Router } from 'express';
import WarrantyConditionsController from '../controllers/WarrantyConditionsController';
import { AdminRoles } from '../entity/Admin';
import adminAuthMiddleware from '../middlewares/adminAuthMiddleware';
const router = Router();

router.get(
  '/',
  adminAuthMiddleware.protect,
  WarrantyConditionsController.getAll
);
router.post(
  '/',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(AdminRoles.admin, AdminRoles.superAdmin),
  WarrantyConditionsController.create
);
router.patch(
  '/:id',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(AdminRoles.admin, AdminRoles.superAdmin),
  WarrantyConditionsController.updateOne
);
router.delete(
  '/:id',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(AdminRoles.admin, AdminRoles.superAdmin),
  WarrantyConditionsController.deleteOne
);
router.get(
  '/:conditionsTitle',
  WarrantyConditionsController.getByConditionTitle
);

export default router;
