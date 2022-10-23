module.exports = (app) => {
    app.get('/publico', (req, res) => {
        res.send({ mensagem: 'Esta é uma rota pública!' })
    });
}