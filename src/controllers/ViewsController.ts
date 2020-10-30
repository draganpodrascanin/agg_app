import { Request, Response, NextFunction } from 'express';

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

  public NotFound404View = (req: Request, res: Response) => {
    res.status(404).render('404.pug');
  };
}

export default new ViewsController();
