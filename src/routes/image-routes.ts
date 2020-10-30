import { Router } from 'express';
import ImageController from '../controllers/ImageController';
import { AdminRoles } from '../entity/Admin';
import adminAuthMiddleware from '../middlewares/adminAuthMiddleware';
import { uploadBlogImages } from '../middlewares/multerBlogImagesMiddleware';

const router = Router();

router.get(
  '/',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(AdminRoles.superAdmin, AdminRoles.blogger),
  ImageController.getPage
);

router.post(
  '/',
  uploadBlogImages.array('blogImages', 10),
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(AdminRoles.superAdmin, AdminRoles.blogger),
  ImageController.upload
);

export default router;
