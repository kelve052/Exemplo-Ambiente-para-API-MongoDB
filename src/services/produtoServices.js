import ProdutoRepository from '../repositories/produtoRepository.js';

const Produto = new ProdutoRepository()

class ProdutoServices{
  async getService(){
    return Produto.listar()
  }
}

export default ProdutoServices;