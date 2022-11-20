const db = require('../../banco-de-dados/banco-de-dados');

module.exports = async (req, res) => {
    const { idDaCompra } = req.body;

    await db.compra.delete({
        where: {
            id: idDaCompra
        }
    });

    res.send();
}