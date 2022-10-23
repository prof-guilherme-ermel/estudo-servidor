const db = require('../../banco-de-dados/banco-de-dados');
const criptografia = require('../../utilitarios/criptografia')
const jwt = require('../../utilitarios/jwt')

module.exports = async (req, res) => {
const { email, senha } = req.body;

if (!email || !senha) {
    res.status(400).send({ error: 'Email ou senha não informado!' })
    return;
}

const usuario = await db.usuario.findFirst({ where: { email } });
if (!usuario) {
    res.status(400).send({ error: 'Usuário não encontrado!' })
    return;
}

if (!criptografia.valorEhEquivalenteAoCriptografado(senha, usuario.senha)) {
    res.status(400).send({ error: 'Senha inválida!' })
    return;
}

res.send({
    usuario,
    token: jwt.criarToken({ email: usuario.email })
});
}