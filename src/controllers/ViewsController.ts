import { Request, Response, NextFunction } from 'express';
import { BlogRepository } from '../repositories/BlogRepository';
import { CarRepository } from '../repositories/CarRepository';
import { UserRepository } from '../repositories/UserRepository';
import CustomError from '../utils/CustomError';
import getEnvConnection from '../utils/get-env-connection';

class ViewsController {
  //render views

  public home = (req: Request, res: Response) => {
    res.status(200).render('home.pug');
  };

  public ugradnjaplina = (req: Request, res: Response) => {
    res.status(200).render('ugradnjaplina.pug');
  };

  public slep = (req: Request, res: Response) => {
    res.status(200).render('slep.pug');
  };

  public mehanika = (req: Request, res: Response) => {
    res.status(200).render('mehanika.pug');
  };

  public eknjizica = async (req: Request, res: Response) => {
    const user = req.user;
    if (!user) throw new CustomError('server error', 500);

    const carRepo = getEnvConnection().getCustomRepository(CarRepository);
    const cars = await carRepo.getUserOwnedCars(user.id);

    res.status(200).render('eknjizica.pug', { cars });
  };

  public eknjizicaCar = async (req: Request, res: Response) => {
    const carId = req.params.id;
    const carRepo = getEnvConnection().getCustomRepository(CarRepository);

    const car = await carRepo.findOneAndPopulate(carId);

    res.status(200).render('eknjizica-car.pug', { car });
  };

  public userlogin = (req: Request, res: Response) => {
    res.status(200).render('userlogin.pug');
  };

  public forgotpassword = (req: Request, res: Response) => {
    res.status(200).render('forgot-password.pug');
  };

  public blog = async (req: Request, res: Response) => {
    const blogRepo = getEnvConnection().getCustomRepository(BlogRepository);
    const blogs = await blogRepo.getPage(1, 9, '', true);

    res.status(200).render('blog.pug', { blogs });
  };

  public blogContent = async (req: Request, res: Response) => {
    const blogRepo = getEnvConnection().getCustomRepository(BlogRepository);
    const blog = await blogRepo.findBySlug(req.params.slug);

    if (!blog) res.status(404).render('404.pug');

    res.status(200).render('blog-content.pug', blog);
  };

  public passwordReset = async (req: Request, res: Response) => {
    res.status(200).render('reset-password.pug');
  };

  public NotFound404View = (req: Request, res: Response) => {
    res.status(404).render('404.pug');
  };
}

export default new ViewsController();
