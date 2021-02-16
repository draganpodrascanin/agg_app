import { EntityRepository, Repository } from 'typeorm';
import { Admin } from '../entity/Admin';
import { Blog } from '../entity/Blog';
import { Entities } from '../entity/Entities';
import { Image } from '../entity/Image';

interface IBlogBody {
  thumbnail: Image;
  image: Image;
  admin: Admin;
  title: string;
  content: string;
  imageAlt: string;
  thumbnailAlt: string;
  synopsis?: string;
}

@EntityRepository(Blog)
export class BlogRepository extends Repository<Blog> {
  //----------------------------------------------------------------------------------

  public createAndSave(blogBody: IBlogBody): Promise<Blog> {
    const { thumbnail, image, admin, title, content, synopsis } = blogBody;

    const blog = this.create({
      admin,
      image,
      thumbnail,
      title,
      content,
      synopsis,
    });

    return this.save(blog);
  }

  public getPage(
    page: number,
    limit: number,
    search?: string,
    hideUnpublished?: boolean
  ): Promise<Blog[]> {
    const offset = (page - 1) * limit;
    const query = this.createQueryBuilder('blog').select([
      `${Entities.Blog}.id`,
      `${Entities.Blog}.thumbnailAlt`,
      `${Entities.Blog}.thumbnailId`,
      `${Entities.Blog}.title`,
      `${Entities.Blog}.synopsis`,
      `${Entities.Blog}.slug`,
      `${Entities.Blog}.published`,
      `${Entities.Blog}.createdAt`,
    ]);

    if (search)
      query.where(
        `CONCAT(${Entities.Blog}.title, ' ', ${Entities.Blog}.synopsis) LIKE '%${search}%'`
      );

    if (hideUnpublished) query.where('blog.published = true');

    return query
      .offset(offset)
      .limit(limit)
      .leftJoinAndSelect(`${Entities.Blog}.thumbnail`, 'image')
      .getMany();
  }

  public findBySlug(slug: string): Promise<Blog | undefined> {
    return this.findOne({
      where: { slug: slug },
      relations: ['image', 'thumbnail'],
    });
  }
}
