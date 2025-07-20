import express from 'express';
import * as shoesController from '../controllers/shoes.controller.js';

const router = express.Router();

// Listar todos os sapatos
router.get('/shoes', shoesController.getAllShoes);

// Adicionar um novo sapato
router.post('/shoes', shoesController.addNewShoes);

// Apagar um sapato pelo Id
router.delete('/shoes/:id', shoesController.deleteShoesById);

export default router;