const db = require('../../banco-de-dados/banco-de-dados');

module.exports = async (req, res) => {
    const { codigoDoProduto, nome, valor } = req.body;
    
    const produto = await db.produto.update({
        where: {
            codigoDoProduto,
        },
        data: {
            nome,
            valor,
        }
    });
    
    res.send({ produto });
}