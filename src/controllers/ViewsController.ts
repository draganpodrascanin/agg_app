import { Request, Response, NextFunction } from 'express';
import { BlogRepository } from '../repositories/BlogRepository';
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

  public eknjizica = (req: Request, res: Response) => {
    res.status(200).render('eknjizica.pug');
  };

  public userlogin = (req: Request, res: Response) => {
    res.status(200).render('userlogin.pug');
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
    console.log(blog);
    res.status(200).render('blog-content.pug', blog);
  };

  public NotFound404View = (req: Request, res: Response) => {
    res.status(404).render('404.pug');
  };
}

export default new ViewsController();
