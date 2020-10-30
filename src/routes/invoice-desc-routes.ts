import { Router } from 'express';
import InvoiceDescController from '../controllers/InvoiceDescController';
import { AdminRoles } from '../entity/Admin';
import adminAuthMiddleware from '../middlewares/adminAuthMiddleware';

const router = Router({ mergeParams: true });

router.get(
  '/',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(AdminRoles.admin, AdminRoles.superAdmin),
  InvoiceDescController.getInvoiceDescsOfInvoice
);

router.get(
  '/:id',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(AdminRoles.admin, AdminRoles.superAdmin),
  InvoiceDescController.getOne
);

router.post(
  '/',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(AdminRoles.admin, AdminRoles.superAdmin),
  InvoiceDescController.create
);

router.patch(
  '/:id',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(AdminRoles.admin, AdminRoles.superAdmin),
  InvoiceDescController.updateOne
);

router.delete(
  '/:id',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(AdminRoles.admin, AdminRoles.superAdmin),
  InvoiceDescController.deleteOne
);

export default router;
