import { Router } from 'express';
import AggregationController from '../controllers/AggregationController';
// import authMiddleware from '../middlewares/userAuthMiddleware';

const router = Router();

router.get('/expensesAndProfit', AggregationController.getExpansesAndProfit);

export default router;
