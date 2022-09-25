const db = require('../../banco-de-dados/banco-de-dados');

module.exports = async (req, res) => {
    const codigoDoProduto = req.params.codigoDoProduto || req.body.codigoDoProduto;
    const produto = await db.produto.delete({
        where: {
            codigoDoProduto
        }
    });

    if (!produto) {
        res.status(400).send({ error: 'Produto não encontrado para remoção!' });
        return;
    }

    res.send();
}