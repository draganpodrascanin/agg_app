import { Request, Response } from 'express';
import { Entities } from '../entity/Entities';
import { Image } from '../entity/Image';
import { asyncForEach } from '../utils/asyncForEach';
import CustomError from '../utils/CustomError';
import getEnvConnection from '../utils/get-env-connection';
import handlerFactory from './handlerFactory';

declare global {
  namespace Express {
    interface Request {
      // files?: Express.Multer.File[];
    }
  }
}

class ImageController {
  public getPage = handlerFactory.getPage(Entities.Image);

  public upload = async (req: Request, res: Response) => {
    //@ts-ignore
    const file = req.file;

    if (!file) throw new CustomError('no image uploaded', 400);

    const imageRepo = getEnvConnection().getRepository(Image);

    let path: any = file.path.split('/');
    path.shift();
    path = '/' + path.join('/');

    const image = imageRepo.create({
      name: file.filename,
      path,
    });

    await imageRepo.save(image);

    res.status(201).json({
      status: 'success',
      data: image,
    });
  };

  public uploadMulti = async (req: Request, res: Response) => {
    if (!req.files) throw new CustomError('No image uploaded', 400);

    const imageRepo = getEnvConnection().getRepository(Image);
    //@ts-ignore
    const files = [...req.files];

    const images = await Promise.all(
      files.map((file) => {
        let path: any = file.path.split('/');
        path.shift();
        path = '/' + path.join('/');

        const image = imageRepo.create({
          name: file.filename,
          path,
        });

        return imageRepo.save(image);
      })
    );

    res.status(201).json({
      status: 'success',
      results: images.length,
      data: images,
    });
  };
}

export default new ImageController();
