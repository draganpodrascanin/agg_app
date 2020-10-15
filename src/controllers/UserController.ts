import handlerFactory from './handlerFactory';
import { Entities } from '../entity/Entities';

/*
 *Example of handler factory in action
 */
class UserController {
	public getAll = handlerFactory.getAll(Entities.User);
	public getOne = handlerFactory.getOne(Entities.User);
	public updateOne = handlerFactory.updateOne(Entities.User, [
		'email',
		'firstName',
		'lastName',
		'role',
	]);
	public deleteOne = handlerFactory.deletOne(Entities.User);
}

export default new UserController();
