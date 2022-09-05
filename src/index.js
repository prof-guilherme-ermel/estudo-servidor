const express = require('express')
const cors = require('cors')
const controleDeUsuarios = require('./controladores/controle-de-usuarios')
const port = 3000

const app = express()
app.use(cors())
app.use(express.json())
controleDeUsuarios(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
