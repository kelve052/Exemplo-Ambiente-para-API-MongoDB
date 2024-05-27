import ProdutoServices from '../services/produtoServices.js';

const Services = new ProdutoServices();

const getProduto = (req, res) => {
  const response = Services.getService()
  res.json({response: response})
};

export { getProduto };
