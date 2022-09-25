const db = require('../../banco-de-dados/banco-de-dados');

module.exports = async (req, res) => {
    res.send({
        produtos: await db.produto.findMany({
            select: {
                nome: true,
                valor: true,
            },
        })
    });
}