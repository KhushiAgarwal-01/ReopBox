import express from 'express';
import { explorrepos } from '../controllers/explore.controller.js';

const router=express.Router();
router.get('/repos/:language',explorrepos);


export default router;