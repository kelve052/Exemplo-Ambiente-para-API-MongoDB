import produtoModel from '../models/produtoModel.js';

class ProdutoRepository {
  async listar(){
    const response = await produtoModel.find()
    console.log(response)
    return response
  }
}

export default ProdutoRepository;