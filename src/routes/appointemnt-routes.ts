import { Router } from 'express';
import AppointmentController from '../controllers/AppointmentController';
import { AdminRoles } from '../entity/Admin';
import adminAuthMiddleware from '../middlewares/adminAuthMiddleware';

const router = Router();

router.get(
  '/',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(
    AdminRoles.superAdmin,
    AdminRoles.admin,
    AdminRoles.mechanic
  ),
  AppointmentController.getAll
);

router.post(
  '/',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(
    AdminRoles.superAdmin,
    AdminRoles.admin,
    AdminRoles.mechanic
  ),
  AppointmentController.create
);

router.get(
  '/betweenDates',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(
    AdminRoles.superAdmin,
    AdminRoles.admin,
    AdminRoles.mechanic
  ),
  AppointmentController.getBetweenDates
);

router.get(
  '/todaysAppointments',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(
    AdminRoles.superAdmin,
    AdminRoles.admin,
    AdminRoles.mechanic
  ),
  AppointmentController.getTodaysAppointments
);

router.get(
  '/:id',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(
    AdminRoles.superAdmin,
    AdminRoles.admin,
    AdminRoles.mechanic
  ),
  AppointmentController.getOne
);

router.patch(
  '/:id',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(AdminRoles.superAdmin, AdminRoles.admin),
  AppointmentController.updateOne
);

export default router;
