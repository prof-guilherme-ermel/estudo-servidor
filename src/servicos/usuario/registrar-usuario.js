const db = require('../../banco-de-dados/banco-de-dados');
const criptografia = require('../../utilitarios/criptografia');

module.exports = async (req, res) => {
    // 1. obter informações
    const { nome, email, senha } = req.body;
    
    // validando
    if (!nome || !email || !senha) {
        res.status(400).send({ error: 'Nome, email ou senha não informado!' })
        return;
    }
    
    const usuarioJaRegistrado = await db.usuario.findFirst({ where: { email } });
    if (usuarioJaRegistrado) {
        res.status(400).send({ error: 'Já existe um usuário com este email!' })
        return;
    }

    const senhaCriptografada = criptografia.criptografar(senha);
    
    // 2. adicionar no array de usuarios
    // um objeto com essas propriedades acima
    const usuario = await db.usuario.create({ data: {
        nome,
        email,
        senha: senhaCriptografada,
    }});
    
    // 3. retornar o usuario registrado
    res.send({ usuario })
}