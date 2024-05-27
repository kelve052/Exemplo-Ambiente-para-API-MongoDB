import mongoose from 'mongoose';

const ModelProduto = new mongoose.Schema({
  nome: {
    type: String,
    unique: true,
    trim: true
  },
  valorGasto: {
    type: Number,
    trim: true
  },
  valorVenda: {
    type: Number,
    trim: true
  },
  quantidade: {
    type: Number,
    trim: true
  },
  fotoProduto: {
    type: String //armazena o caminho da imagem
  }
})


export default mongoose.model('Produtos', ModelProduto)