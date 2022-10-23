const jsonwebtoken = require('jsonwebtoken');

module.exports = {
    criarToken(dados) {
        return jsonwebtoken.sign(
            dados,
            process.env.AUTH_SECRET,
            { expiresIn: 60 }, // um minuto - apenas como exemplo para logo expirar
        );
    },

    tokenValido(token) {
        try {
            return jsonwebtoken.verify(
                token,
                process.env.AUTH_SECRET,
            );
        } catch (e) {
            return false;
        }
    }
}