const jwt = require('../utilitarios/jwt');

module.exports = (req, res, next) => {
    const autenticacao = req.headers.authorization;
    if (!autenticacao) {
        res.status(401).send({ error: 'Token não informado!' });
        return;
    }

    const bearerEToken = autenticacao.split(' ');
    if (
        bearerEToken.length !== 2
        || bearerEToken[0] !== 'Bearer'
    ) {
        res.status(401).send({ error: 'Token mal formatado!' });
        return;
    }
    
    if (!jwt.tokenValido(bearerEToken[1])) {
        res.status(401).send({ error: 'Sessão expirada!' });
        return;
    }
    next();
};