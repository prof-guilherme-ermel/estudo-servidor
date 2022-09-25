const registrarUsuario = require('../servicos/usuario/registrar-usuario');
const listarUsuarios = require('../servicos/usuario/listar-usuarios');
const autenticarUsuario = require('../servicos/usuario/autenticar-usuario');

module.exports = (app) => {
    app.post('/usuarios/registro', registrarUsuario);
      
    app.get('/usuarios', listarUsuarios);
      
    app.post('/usuarios/login', autenticarUsuario);
}