import { NextFunction, Request, Response } from 'express';
import { CalcLog } from '../entity/CalcLog';
import getEnvConnection from '../utils/get-env-connection';

class LogsController {
	public savingsCalculator = async (
		req: Request,
		res: Response,
		next: NextFunction
	) => {
		const { priceLPG, pricePetrol, fcPer100km, kmPerYear } = req.body;

		const entityRepo = getEnvConnection().getRepository(CalcLog);
		const calcLog = entityRepo.create({
			priceLPG,
			pricePetrol,
			fcPer100km,
			kmPerYear,
		});

		await entityRepo.save(calcLog);

		res.status(200).json({
			status: 'success',
		});
	};
}

export default new LogsController();
