import express from 'express'
import { getProduto } from '../controllers/produtosController.js';

const router = express.Router()

router.get('/fet', getProduto)

export default router;