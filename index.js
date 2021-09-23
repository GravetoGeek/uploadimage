// Importa o express, framework de desenvolvimento web
const express = require('express')
// Importa possíveis rotas
const routes = require('./routes')
// Importa biblioteca CORS, cross-origem resource sharing, permite obter e compartilhar arquivos de servidores remotos
const cors = require('cors')
// Cria o app
const app = express()
//Ativa o CORS
app.use(cors())
// Importa as configurações dotenv no arquivo .env
require('dotenv').config()
// Permite que o servidor aceite dados no formato JSON
app.use(express.json())
// Ativa as possíveis rotas
app.use('',routes)
// Transforma a pasta public em uma pasta estática e publica 
app.use(express.static('public'))
// Transforma a pasta views em uma pasta estática e pública
app.use(express.static('views'))
// Importa a biblioteca multer, permite que o servidor aceite Content-Type: 'multipart/form-data'
const multer = require('multer');
// Importa o modelo DAO, permite criar conexão com banco de dados para alterar o modelo
const {postagem} = require('./models')
// Especifica o diretório ao qual a biblioteca mult salvará os arquivos binários enviados
const uploads = multer({ dest: 'public/uploads/' })
// Ativa o framework frontend de componentização
app.set('view engine','ejs')


// Declara método get() para a rota
app.get('/', (req, res)=>{
  res.render('./index')
})


// Declara método post() para a rota
app.post('/salvar',uploads.single('photo'), async(req,res)=>{
  let {body, file} = req
  let {treatment, code, rate} = body
  console.log(req)


  let post = {
    treatment,
    code,
    rate,
    photo_url: `http://${process.env.NODE_HOST}:${process.env.NODE_PORT}/uploads/${file.filename}`,
    photo_originalname: file.originalname
  }

  const result = await postagem.create(post)
  //console.log(result)
  res.send(result)

})

app.listen(process.env.NODE_PORT, ()=>{
  console.log(`Servidor online: http://${process.env.NODE_HOST}:${process.env.NODE_PORT}`)
})