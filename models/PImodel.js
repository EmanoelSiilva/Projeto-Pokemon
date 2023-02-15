const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PISchema = new Schema ({
    nome: {
        type: String,
        required: [true, "*Campo obrigatório!"]
    },
    tipo: {
        type: String
    }
})

const PI = mongoose.model('ApiPokemon', PISchema)

module.exports = PI