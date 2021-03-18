const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

var userSchema = new mongoose.Schema({
    name: String,
    email: {type: String, required: true, unique: true},//Tipo, será obrigatório e único
    password: {type: String, required: true},
    created_at: {type: Date, default: Date.now}, //data de criação
    updated_at: {type: Date, default: Date.now} //data de atualização
}); //O Esquema representa os campos do banco de dados


userSchema.pre('save', function (next){ //operação. função (parâmetro próximo)
    if(this.isNew || this.isModified('password')){
        bcrypt.hash(this.password, 10, //passar a senha para encriptar, SoutOnRoutes(numero de caracteres gerados em forma de hash)
            (err, hashedPassword)=>{  //o bcrypt retornará um erro ou a hash
                if(err)
                    next(err); //exibe erro
                else{
                    this.password = hashedPassword; //transforma em hash
                    next(); //continua salvando no bd
                }
                
        }) //passar a senha para encriptar, SoutOnRoutes(numero de caracteres gerados em forma de hash)
    } //condições de encriptação
}) //sempre que for salvar um user no banco, ele vai exibir essa função primeiro

userSchema.methods.isCorrectPassword = function (password, callback) {
    bcrypt.compare(password, this.password, function(err, same){
        if(err)
            callback(err)
        else 
            callback(err, same)
    })
}

module.exports = mongoose.model('User', userSchema); //exportando a model(nome, variavel do Esquema)