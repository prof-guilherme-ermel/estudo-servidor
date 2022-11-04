const comprar = require('../servicos/compra/comprar');

module.exports = (app) => {
    app.post('/compra', comprar);
}