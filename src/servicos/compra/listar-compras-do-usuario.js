const db = require('../../banco-de-dados/banco-de-dados');

module.exports = async (req, res) => {
    const { compradorId } = req.body;

    const compras = await db.compra.findMany({
        where: {
            compradorId
        },
        include: {
            itens: true
        }
    });

    res.send(compras);
}