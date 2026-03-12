import { Router } from 'express';
import { createAccessTokenProcessor } from '../controller/craeteAccessTokenProcessor';
import { webHookHandler } from '../controller/webHookHandler';

const router: Router = Router();

router.post('/access_token', createAccessTokenProcessor);

router.post('/webhook', webHookHandler);

export default router;
