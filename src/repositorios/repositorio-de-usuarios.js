const usuarios = [
    { nome: 'Guilherme', email: 'g@mail.com', senha: '123456' }
];

function adicionarUsuario(usuario) {
    usuarios.push(usuario);
}

function obterUsuarioPorEmail(email) {
    return usuarios.find((u) => u.email === email);
}

function obterTodosUsuarios() {
    return usuarios;
}

module.exports = { adicionarUsuario, obterUsuarioPorEmail, obterTodosUsuarios };
