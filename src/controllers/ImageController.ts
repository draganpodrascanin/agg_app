import { Request, Response } from 'express';
import { Entities } from '../entity/Entities';
import { Image } from '../entity/Image';
import { asyncForEach } from '../utils/asyncForEach';
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
    console.log(req.files);
    const imageRepo = getEnvConnection().getRepository(Image);
    const files = [...req.files];

    const images = await Promise.all(
      files.map((file) => {
        const image = imageRepo.create({
          name: file.filename,
          path: file.path,
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
