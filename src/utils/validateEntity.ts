import { validate } from 'class-validator';
import CustomError from './CustomError';
import { ObjectLiteral } from 'typeorm';
import { User } from '../entity/User';

export default async (
  entity: User /*change type to your entities that need validation*/
): Promise<void> => {
  const errors = await validate(entity);

  if (errors.length > 0) {
    let msg = `Validation failed. `;

    errors.forEach((err) => {
      for (const key in err.constraints) {
        if (Object.prototype.hasOwnProperty.call(err.constraints, key)) {
          const element = err.constraints[key];
          msg += `${element}. `;
        }
      }
    });

    throw new CustomError(msg, 400);
  }
};
