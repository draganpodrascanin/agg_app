import { Request, Response } from 'express';
import { Entities } from '../entity/Entities';
import { Image } from '../entity/Image';
import { AdminRepository } from '../repositories/AdminRepository';
import { BlogRepository } from '../repositories/BlogRepository';
import CustomError from '../utils/CustomError';
import getEnvConnection from '../utils/get-env-connection';
import handlerFactory from './handlerFactory';
//extending Request object to take user if provided by middleware
declare global {
  namespace Express {
    interface Request {
      // admin?: Admin;
    }
  }
}

class BlogController {
  public getOne = handlerFactory.getOne(Entities.Blog, {
    relations: ['image'],
  });
  public deleteOne = handlerFactory.deleteOne(Entities.Blog);
  public count = handlerFactory.count(Entities.Blog);

  //--------------------------------------------------------------------------

  public getPage = async (req: Request, res: Response) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.number) || 9;

    const blogRepo = getEnvConnection().getCustomRepository(BlogRepository);
    const blogs = await blogRepo.getPage(page, limit);

    res.status(200).json({
      status: 'success',
      results: blogs.length,
      data: blogs,
    });
  };

  //--------------------------------------------------------------------------

  public create = async (req: Request, res: Response) => {
    if (!req.admin) throw new CustomError('you need to be logged in', 401);
    const {
      imageId,
      thumbnailId,
      imageAlt,
      thumbnailAlt,
      content,
      title,
    } = req.body;

    if (!imageId || !thumbnailId)
      throw new CustomError("Need to provide valid image id's", 400);

    if (!imageAlt || !thumbnailAlt)
      throw new CustomError('Need to provide Image nad Thumbnail ALT', 400);

    const connect = getEnvConnection();
    const imageRepo = connect.getRepository(Image);

    const image = await imageRepo.findOne({ where: { id: imageId } });
    if (!image) throw new CustomError('imageId is invalid', 400);

    const thumbnail = await imageRepo.findOne({
      where: { id: thumbnailId },
    });
    if (!thumbnail) throw new CustomError('thumbnailId is invalid', 400);

    const blogRepo = connect.getCustomRepository(BlogRepository);
    const blog = await blogRepo.createAndSave({
      title,
      image,
      admin: req.admin,
      content,
      thumbnail,
      imageAlt,
      thumbnailAlt,
    });

    res.status(201).json({
      status: 'success',
      data: blog,
    });
  };
}

export default new BlogController();
