const comprar = require('../servicos/compra/comprar');
const listarComprasDoUsuario = require('../servicos/compra/listar-compras-do-usuario');
const removerCompra = require('../servicos/compra/remover-compra');

module.exports = (app) => {
    app.post('/compra', comprar);
    app.get('/compras-do-usuario', listarComprasDoUsuario);
    app.get('/compras-do-usuario/:compradorId', listarComprasDoUsuario);
    app.delete('/compra', removerCompra);
}