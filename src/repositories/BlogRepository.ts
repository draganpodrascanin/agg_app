import { EntityRepository, Repository } from 'typeorm';
import { Admin } from '../entity/Admin';
import { Blog } from '../entity/Blog';
import { Image } from '../entity/Image';

interface IBlogBody {
  thumbnail: Image;
  image: Image;
  admin: Admin;
  title: string;
  content: string;
  imageAlt: string;
  thumbnailAlt: string;
}

@EntityRepository(Blog)
export class BlogRepository extends Repository<Blog> {
  //----------------------------------------------------------------------------------

  public createAndSave(blogBody: IBlogBody): Promise<Blog> {
    const { thumbnail, image, admin, title, content } = blogBody;

    const blog = this.create({
      admin,
      image,
      thumbnail,
      title,
      content,
    });

    return this.save(blog);
  }

  public getPage(page: number, limit: number): Promise<Blog[]> {
    const offset = (page - 1) * limit;
    return this.createQueryBuilder('blog')
      .offset(offset)
      .limit(limit)
      .leftJoinAndSelect('blog.thumbnail', 'image')
      .getMany();
  }
}
