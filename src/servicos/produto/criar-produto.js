const db = require('../../banco-de-dados/banco-de-dados');

module.exports = async (req, res) => {
    const { codigoDoProduto, nome, valor } = req.body;
    
    if (!codigoDoProduto || !nome || !valor) {
        res.status(400).send({ error: 'Código, nome ou valor do produto não informado!' });
        return;
    }
    
    const produtoJaRegistrado = await db.produto.findFirst({ where: { codigoDoProduto } });
    if (produtoJaRegistrado) {
        res.status(400).send({ error: 'Já existe um produto com este código!' });
        return;
    }
    
    const produto = await db.produto.create({
        data: {
            codigoDoProduto,
            nome,
            valor,
        }
    });
    
    res.send({ produto });
}