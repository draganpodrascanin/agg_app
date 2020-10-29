import { Router } from 'express';
import NextVisitController from '../controllers/NextVisitController';
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
  NextVisitController.getAll
);

router.post(
  '/',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(
    AdminRoles.admin,
    AdminRoles.superAdmin,
    AdminRoles.mechanic
  ),
  NextVisitController.createOne
);

router.patch(
  '/:id',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(
    AdminRoles.admin,
    AdminRoles.superAdmin,
    AdminRoles.mechanic
  ),
  NextVisitController.updateOne
);

router.get(
  '/:id',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(
    AdminRoles.admin,
    AdminRoles.superAdmin,
    AdminRoles.mechanic
  ),
  NextVisitController.getOne
);

router.delete(
  '/:id',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(
    AdminRoles.admin,
    AdminRoles.superAdmin,
    AdminRoles.mechanic
  ),
  NextVisitController.deleteOne
);

export default router;
