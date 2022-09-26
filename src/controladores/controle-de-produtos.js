const criarProduto = require('../servicos/produto/criar-produto');
const obterProduto = require('../servicos/produto/obter-produto');
const listarProdutos = require('../servicos/produto/listar-produtos');
const alterarProduto = require('../servicos/produto/alterar-produto');
const removerProduto = require('../servicos/produto/remover-produto');

module.exports = (app) => {
    app.post('/produto', criarProduto);
      
    app.get('/produto/:codigoDoProduto', obterProduto);

    app.get('/produtos', listarProdutos);
      
    app.put('/produto', alterarProduto);

    app.delete('/produto', removerProduto);
}