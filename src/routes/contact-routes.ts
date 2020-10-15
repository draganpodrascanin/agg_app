import { Router } from 'express';
import ContactController from '../controllers/ContactController';

const router = Router();

router.post('/', ContactController.contact);

export default router;
