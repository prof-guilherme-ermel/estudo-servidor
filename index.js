const express = require('express')
const cors = require('cors')
const port = 3000

const app = express()
app.use(cors())
app.use(express.json())

const usuarios = [];
app.post('/usuarios/registro', (req, res) => {
  // 1. obter informações
  const { nome, email, senha } = req.body;

  // validando
  if (!nome || !email || !senha) {
    res.status(400).send({ error: 'Nome, email ou senha não informado!' })
    return;
  }

  // 2. adicionar no array de usuarios
  // um objeto com essas propriedades acima
  const usuario = { nome, email, senha };
  usuarios.push(usuario)
  
  // 3. retornar o usuario registrado
  res.send({ usuario })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
