const db = require('../../banco-de-dados/banco-de-dados');

module.exports = async (req, res) => {
    const compradorId = req.params.compradorId || req.body.compradorId;

    if (!compradorId) {
        res.status(400).send({ error: "Comprador não informado" });
    }

    const compras = await db.compra.findMany({
        where: {
            compradorId: Number(compradorId)
        },
        include: {
            itens: true
        }
    });

    res.send(compras);
}