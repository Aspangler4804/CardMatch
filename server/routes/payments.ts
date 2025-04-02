import express from 'express';
const router = express.Router();
import {getPayments} from '../controllers/payments.ts';


router.get('/Payment', getPayments);


export default router;
