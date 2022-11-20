const express = require('express');
const registrarUsuario = require('../servicos/usuario/registrar-usuario');
const listarUsuarios = require('../servicos/usuario/listar-usuarios');
const autenticarUsuario = require('../servicos/usuario/autenticar-usuario');

const router = express.Router();
router.post('/usuarios/registro', registrarUsuario);
router.get('/usuarios', listarUsuarios);
router.post('/usuarios/login', autenticarUsuario);

module.exports = (app) => {
    app.use(router);
}