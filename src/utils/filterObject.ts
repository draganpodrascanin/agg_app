import { ObjectLiteral } from 'typeorm';

//helper function to filter object of unwanted fields
export const filterObj = (obj: ObjectLiteral, ...allowedFields: string[]) => {
  const newObj: ObjectLiteral = {};

  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) {
      newObj[el] = obj[el];
    }
  });

  return newObj;
};
