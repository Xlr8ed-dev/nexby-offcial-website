import { Router } from 'express';
import * as apiController from '../controllers/apiController';

const router = Router();

router.get('/landing-pages/:slug', apiController.getLandingPage);
router.post('/forms/submit', apiController.submitForm);

export default router;
