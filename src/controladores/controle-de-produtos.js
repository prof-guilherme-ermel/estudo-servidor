const express = require('express');
const criarProduto = require('../servicos/produto/criar-produto');
const obterProduto = require('../servicos/produto/obter-produto');
const listarProdutos = require('../servicos/produto/listar-produtos');
const alterarProduto = require('../servicos/produto/alterar-produto');
const removerProduto = require('../servicos/produto/remover-produto');
const autenticacao = require('../middlewares/autenticacao');

const router = express.Router();
router.use(['/produto', '/produtos'], autenticacao);

router.post('/produto', criarProduto);
router.get('/produto/:codigoDoProduto', obterProduto);
router.get('/produtos', listarProdutos);
router.put('/produto', alterarProduto);
router.delete('/produto', removerProduto);

module.exports = (app) => {
    app.use(router);
}