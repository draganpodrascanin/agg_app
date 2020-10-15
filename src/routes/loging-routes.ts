import { Router } from 'express';
import ViewsController from '../controllers/LogsController';

const router = Router();

router.post('/savingcalc', ViewsController.savingsCalculator);

export default router;
