const db = require('../../banco-de-dados/banco-de-dados');

module.exports = async (req, res) => {
    const {
        compradorId,
        produtosEQuantidades, // [{codigoDoProduto, quantidade}]
    } = req.body;

    if (!compradorId) {
        res.status(400).send({ error: 'Comprador não informado!' });
        return;
    }
    
    if (!produtosEQuantidades || produtosEQuantidades.length === 0) {
        res.status(400).send({ error: 'Produtos não informados!' });
        return;
    }

    const codigosDosProdutos = produtosEQuantidades.map((p) => p.codigoDoProduto);
    const produtos = await db.produto.findMany({
        where: { codigoDoProduto: { in: codigosDosProdutos } }
    });

    let total = 0;
    const itensDaCompra = [];
    for (const produtoEQuantidade of produtosEQuantidades) {
        const produto = produtos.find(
            (p) => p.codigoDoProduto === produtoEQuantidade.codigoDoProduto,
        );

        if (!produto) {
            res.status(400).send({ error: `Produto ${produtoEQuantidade.codigoDoProduto} inexistente!` });
            return
        }

        if (produtoEQuantidade.quantidade < 1) {
            res.status(400).send({ error: `Quantidade inválida para o produto ${produtoEQuantidade.codigoDoProduto}!` });
            return
        }

        total += produto.valor * produtoEQuantidade.quantidade
        itensDaCompra.push({
            codigoDoProduto: produto.codigoDoProduto,
            quantidade: produtoEQuantidade.quantidade,
            preco: produto.valor,
        })
    }
    
    const compra = await db.compra.create({
        data: {
            compradorId,
            itens: {
                create: itensDaCompra,
            },
            total
        }
    });
    
    res.send({ compra });
}