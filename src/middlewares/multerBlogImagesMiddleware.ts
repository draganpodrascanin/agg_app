import { Request } from 'express';
import multer, { FileFilterCallback } from 'multer';
import { Image } from '../entity/Image';
import CustomError from '../utils/CustomError';
import getEnvConnection from '../utils/get-env-connection';
import path from 'path';

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, './public/img/blog'),
  filename: (req, file, cb) => {
    // const ext = file.mimetype.split('/')[1];
    cb(
      null,
      `${
        file.originalname.split(' ').join('-').split('.')[0]
      }-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const filter = async (
  req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback
) => {
  if (!file.mimetype.startsWith('image'))
    return cb(
      new CustomError('Not an image! Please upload only image files', 400)
    );

  const imageRepo = getEnvConnection().getRepository(Image);
  const checkDbForImg = await imageRepo.findOne({
    where: { name: file.originalname },
  });

  if (checkDbForImg)
    return cb(
      new CustomError(
        'Already have an image with that name. Image name must be unique',
        400
      )
    );

  cb(null, true);
};

export const uploadBlogImages = multer({
  storage: storage,
  fileFilter: filter,
});
