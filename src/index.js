const express = require('express')
const cors = require('cors')
const controleDeUsuarios = require('./controladores/controle-de-usuarios')
const controleDeProdutos = require('./controladores/controle-de-produtos')
const controlePrivado = require('./controladores/controle-privado')
const controlePublico = require('./controladores/controle-publico')
const port = 3000

const app = express()
app.use(cors())
app.use(express.json())
controleDeUsuarios(app)
controleDeProdutos(app)
controlePrivado(app)
controlePublico(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
