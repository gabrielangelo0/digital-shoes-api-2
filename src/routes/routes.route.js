import shoesRoutes from './shoes.route.js';
import express from 'express';

const router = express.Router();

router.use(shoesRoutes);

export default router;