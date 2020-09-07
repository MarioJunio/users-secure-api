const userSchema = new Schema({
    nome: String,
    sobrenome: String,
    email: String,
    senha: String,
    nivelPermissao: Number
});