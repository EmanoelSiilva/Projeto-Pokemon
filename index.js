const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const port = 3000
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS

const app = express()
app.use(bodyParser.json())

mongoose.connect(`mongodb+srv://EmanoelSilva:123@cluster0.a2ckdqf.mongodb.net/?retryWrites=true&w=majority`)
mongoose.connection.on("connected", () => {
    console.log("Conectado no banco")
})
mongoose.connection.on("error", (err) => {
    console.log('Database error ' + err)
})

const routes = require('./router/api')
app.use('/api', routes)

app.use((req, res, next) => {
    console.log(err)
    res.status(422).send({ err: err.msg })
})

app.listen(port, console.log(`Servidor rodando na porta ${port}`))