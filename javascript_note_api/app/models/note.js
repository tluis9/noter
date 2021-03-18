const { Mongoose } = require("mongoose");

const mongoose = require('mongoose');

let noteSchema = new mongoose.Schema({
    title: String,
    body: String,
    created_at: {type: Date, default: Date.now}, //data de criação
    updated_at: {type: Date, default: Date.now}, //data de atualização
    author: { //criando a relação com a colection user
        type: mongoose.Schema.Types.ObjectId, //pegando a objectId
        ref: 'User', //Qual colection estamos referenciando (User)
        required: true //Essa relação é obrigatória
    }
}) //O Esquema representa os campos do banco de dados

noteSchema.index({ 'title': 'text', 'body': 'text' });

module.exports = mongoose.model('Note', noteSchema); //exportando a model(nome, variavel do Esquema)