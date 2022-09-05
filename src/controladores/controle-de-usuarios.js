const repositorioDeUsuarios = require('../repositorios/repositorio-de-usuarios');

module.exports = (app) => {
    app.post('/usuarios/registro', (req, res) => {
        // 1. obter informações
        const { nome, email, senha } = req.body;
        
        // validando
        if (!nome || !email || !senha) {
            res.status(400).send({ error: 'Nome, email ou senha não informado!' })
            return;
        }
        
        const usuarioJaRegistrado = repositorioDeUsuarios.obterUsuarioPorEmail(email);
        if (usuarioJaRegistrado) {
            res.status(400).send({ error: 'Já existe um usuário com este email!' })
            return;
        }
        
        // 2. adicionar no array de usuarios
        // um objeto com essas propriedades acima
        const usuario = { nome, email, senha };
        repositorioDeUsuarios.adicionarUsuario(usuario);
        
        // 3. retornar o usuario registrado
        res.send({ usuario })
    })
      
    app.get('/usuarios', (req, res) => {
        res.send({ usuarios: repositorioDeUsuarios.obterTodosUsuarios() });
    })
      
    app.post('/usuarios/login', (req, res) => {
        const { email, senha } = req.body;

        if (!email || !senha) {
            res.status(400).send({ error: 'Email ou senha não informado!' })
            return;
        }

        const usuario = repositorioDeUsuarios.obterUsuarioPorEmail(email);
        if (!usuario) {
            res.status(400).send({ error: 'Usuário não encontrado!' })
            return;
        }

        if (usuario.senha !== senha) {
            res.status(400).send({ error: 'Senha inválida!' })
            return;
        }

        res.send({ usuario });
    })
}