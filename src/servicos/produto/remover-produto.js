const db = require('../../banco-de-dados/banco-de-dados');

module.exports = async (req, res) => {
    const { codigoDoProduto } = req.body;

    await db.produto.delete({
        where: {
            codigoDoProduto
        }
    });

    res.send();
}