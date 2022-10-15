const comprar = require('../servicos/compra/comprar');

module.exports = (app) => {
    app.post('/comprar', comprar);
}