import { Router } from 'express';
import CarController from '../controllers/CarController';
import { AdminRoles } from '../entity/Admin';
import adminAuthMiddleware from '../middlewares/adminAuthMiddleware';
import userAuthMiddleware from '../middlewares/userAuthMiddleware';

const router = Router();

//-------------------------------------------------------------------------
router.get(
  '/',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(
    AdminRoles.admin,
    AdminRoles.superAdmin,
    AdminRoles.mechanic
  ),
  CarController.getPage
);

//-------------------------------------------------------------------------
router.get(
  '/suggestions',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(
    AdminRoles.admin,
    AdminRoles.superAdmin,
    AdminRoles.mechanic
  ),
  CarController.getSuggestions
);

//-------------------------------------------------------------------------

router.get(
  '/count',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(
    AdminRoles.admin,
    AdminRoles.superAdmin,
    AdminRoles.mechanic
  ),
  CarController.countCars
);

//-------------------------------------------------------------------------

router.post(
  '/',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(
    AdminRoles.admin,
    AdminRoles.superAdmin,
    AdminRoles.mechanic
  ),
  CarController.create
);

//-------------------------------------------------------------------------

router.patch(
  '/setOwnerByReg',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(
    AdminRoles.admin,
    AdminRoles.mechanic,
    AdminRoles.superAdmin
  ),
  CarController.setOwnerByRegistration
);

//------------------------------------------------------------------------

router.patch(
  '/:id',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(AdminRoles.admin, AdminRoles.superAdmin),
  CarController.updateOne
);

//-------------------------------------------------------------------------

router.delete(
  '/:id',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(AdminRoles.admin, AdminRoles.superAdmin),
  CarController.deleteOne
);

//-------------------------------------------------------------------------

router.patch(
  '/:id/setOwner',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(
    AdminRoles.admin,
    AdminRoles.superAdmin,
    AdminRoles.mechanic
  ),
  CarController.setUserOwnership
);

//-------------------------------------------------------------------------

router.get(
  '/getMyCars',
  userAuthMiddleware.protect,
  userAuthMiddleware.getMe,
  CarController.getMyCars
);

//------------------------------------------------------------------------

router.get(
  '/:id',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(
    AdminRoles.admin,
    AdminRoles.superAdmin,
    AdminRoles.mechanic
  ),
  CarController.getOne
);

export default router;
