const db = require('../../banco-de-dados/banco-de-dados');

module.exports = async (req, res) => {
    res.send({ usuarios: await db.usuario.findMany() });
}