import { Router } from 'express';
import { createAccessTokenProcessor } from '../controller/craeteAccessTokenProcessor';
import { webHookHandler } from '../controller/webHookHandler';
import { userStatusGetter } from '../controller/userStatus';

const router: Router = Router();

router.post('/access_token', createAccessTokenProcessor);

router.post('/webhook', webHookHandler);

router.get('/status', userStatusGetter);

export default router;
