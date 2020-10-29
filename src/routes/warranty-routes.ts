import { Router } from 'express';
import WarrantyController from '../controllers/WarrantyController';
import { AdminRoles } from '../entity/Admin';
import adminAuthMiddleware from '../middlewares/adminAuthMiddleware';
const router = Router();

//get all warranties
router.get(
  '/',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(
    AdminRoles.admin,
    AdminRoles.superAdmin,
    AdminRoles.mechanic
  ),
  WarrantyController.getAll
);

//create new warrantie
router.post(
  '/',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(
    AdminRoles.admin,
    AdminRoles.superAdmin,
    AdminRoles.mechanic
  ),
  WarrantyController.create
);

//update warranty
router.patch(
  '/:id',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(
    AdminRoles.admin,
    AdminRoles.superAdmin,
    AdminRoles.mechanic
  ),
  WarrantyController.updateOne
);

//change conditions to warranty
router.patch(
  '/:id/changeConditions',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(
    AdminRoles.admin,
    AdminRoles.superAdmin,
    AdminRoles.mechanic
  ),
  WarrantyController.changeConditions
);

//get one warranty
router.get(
  '/:id',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(
    AdminRoles.admin,
    AdminRoles.superAdmin,
    AdminRoles.mechanic
  ),
  WarrantyController.getOne
);

router.delete(
  '/:id',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(AdminRoles.admin, AdminRoles.superAdmin),
  WarrantyController.deleteOne
);

export default router;
