import { Router } from 'express';
import AggregationController from '../controllers/AggregationController';
// import authMiddleware from '../middlewares/userAuthMiddleware';

const router = Router();

router.get('/expencesAndProfit', AggregationController.getExpancesAndProfit);

export default router;
