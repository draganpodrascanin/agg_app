import { Request, Response } from 'express';
import { Entities } from '../entity/Entities';
import { Image } from '../entity/Image';
import fs from 'fs';
import path from 'path';
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

  public deleteImage = async (req: Request, res: Response) => {
    const id = req.params.id;
    const repo = getEnvConnection().getRepository(Image);

    const image = await repo.findOne(id);

    if (!image) throw new CustomError('No image with that id', 400);

    fs.unlink(path.resolve(__dirname, `../../public${image.path}`), (err) => {
      if (err) throw new CustomError(err.message, 400);

      repo.delete(image.id).then(() => {
        res.status(200).json({
          status: 'success',
          message: 'image deleted successfully',
        });
      });
    });
  };

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
