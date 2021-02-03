import { Router } from 'express';
import { AdminRoles } from '../entity/Admin';
import InvoiceController from '../controllers/InvoiceController';
import adminAuthMiddleware from '../middlewares/adminAuthMiddleware';

import invoiceDescRoutes from './invoice-desc-routes';
const router = Router();

router.get(
  '/',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(AdminRoles.admin, AdminRoles.superAdmin),
  InvoiceController.getPage
);

router.get(
  '/count',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(AdminRoles.admin, AdminRoles.superAdmin),
  InvoiceController.count
);

router.get(
  '/pdf/:id',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(AdminRoles.admin, AdminRoles.superAdmin),
  InvoiceController.getPdf
);

router.get(
  '/:id',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(AdminRoles.admin, AdminRoles.superAdmin),
  InvoiceController.getOne
);

router.post(
  '/',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(AdminRoles.admin, AdminRoles.superAdmin),
  InvoiceController.create
);

router.patch(
  '/:id',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(AdminRoles.admin, AdminRoles.superAdmin),
  InvoiceController.updateOne
);

router.use('/:invoiceId/invoiceDesc', invoiceDescRoutes);

export default router;
