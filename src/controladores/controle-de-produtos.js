const express = require('express');
const criarProduto = require('../servicos/produto/criar-produto');
const obterProduto = require('../servicos/produto/obter-produto');
const listarProdutos = require('../servicos/produto/listar-produtos');
const alterarProduto = require('../servicos/produto/alterar-produto');
const removerProduto = require('../servicos/produto/remover-produto');
const jwt = require('../utilitarios/jwt');

const router = express.Router();

router.use((req, res, next) => {
    const autenticacao = req.headers.authorization;
    if (!autenticacao) {
        res.status(401).send({ error: 'Token não informado!' });
        return;
    }

    const bearerEToken = autenticacao.split(' ');
    if (
        bearerEToken.length !== 2
        || bearerEToken[0] !== 'Bearer'
    ) {
        res.status(401).send({ error: 'Token mal formatado!' });
        return;
    }
    
    if (!jwt.tokenValido(bearerEToken[1])) {
        res.status(401).send({ error: 'Sessão expirada!' });
        return;
    }
    next();
})

router.post('/produto', criarProduto);
router.get('/produto/:codigoDoProduto', obterProduto);
router.get('/produtos', listarProdutos);
router.put('/produto', alterarProduto);
router.delete('/produto', removerProduto);

module.exports = (app) => {
    app.use(router); 
}