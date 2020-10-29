import { Router } from 'express';
import WorkOrderController from '../controllers/WorkOrderController';
import { AdminRoles } from '../entity/Admin';
import adminAuthMiddleware from '../middlewares/adminAuthMiddleware';
import userAuthMiddleware from '../middlewares/userAuthMiddleware';

const router = Router();

//-------------------------------------------------------------------------
router.get(
  '/',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(AdminRoles.admin, AdminRoles.superAdmin),
  WorkOrderController.getPage
);

//-------------------------------------------------------------------------
router.post(
  '/',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(AdminRoles.admin, AdminRoles.superAdmin),
  WorkOrderController.create
);
//--------------------------------------------------------------------------
router.get(
  '/active',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(
    AdminRoles.admin,
    AdminRoles.superAdmin,
    AdminRoles.mechanic
  ),
  WorkOrderController.getActive
);

//---------------------------------------------------------------------------

router.get(
  '/count',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(
    AdminRoles.admin,
    AdminRoles.superAdmin,
    AdminRoles.mechanic
  ),
  WorkOrderController.getCount
);

//---------------------------------------------------------------------------

router.patch(
  '/:id/complete',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(
    AdminRoles.admin,
    AdminRoles.superAdmin,
    AdminRoles.mechanic
  ),
  WorkOrderController.setToCompleted
);
export default router;
