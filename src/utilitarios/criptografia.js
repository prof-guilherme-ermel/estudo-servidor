const bcrypt = require('bcrypt');

module.exports = {
criptografar(valor) {
    return bcrypt.hashSync(valor, 10);
},

valorEhEquivalenteAoCriptografado(
    valor, valorCriptografado,
) {
    return bcrypt.compareSync(
        valor, valorCriptografado,
    );
}
}