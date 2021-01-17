import { Router } from 'express';
import ImageController from '../controllers/ImageController';
import { AdminRoles } from '../entity/Admin';
import adminAuthMiddleware from '../middlewares/adminAuthMiddleware';
import { uploadBlogImages } from '../middlewares/multerBlogImagesMiddleware';

const router = Router();

router.get('/', adminAuthMiddleware.protect, ImageController.getPage);

router.post(
  '/',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(AdminRoles.superAdmin, AdminRoles.blogger),
  uploadBlogImages.single('blogImage'),
  ImageController.upload
);

router.post(
  '/multi',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(AdminRoles.superAdmin, AdminRoles.blogger),
  uploadBlogImages.array('blogImages', 10),
  ImageController.uploadMulti
);

router.delete(
  '/:id',
  adminAuthMiddleware.protect,
  adminAuthMiddleware.restrictTo(AdminRoles.superAdmin, AdminRoles.blogger),
  ImageController.deleteImage
);

export default router;
