import { Router } from 'express';

const router = Router();

/** Routes Definition */
router.get('/login', () => console.log('login route hit!!'));

/** Export Router */
export default router;