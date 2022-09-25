const db = require('../../banco-de-dados/banco-de-dados');

module.exports = async (req, res) => {
    const { codigoDoProduto } = req.params;
    const produto = await db.produto.findUnique({
        where: {
            codigoDoProduto
        }
    });

    if (!produto) {
        res.status(400).send({ error: 'Produto não encontrado!' });
        return;
    }

    res.send({ produto });
}