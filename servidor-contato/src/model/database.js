const mongoose = require('mongoose');
//DB_URL é nossa string de conexão
const DB_URL = "mongodb://localhost:27017/Reprograma"

const connect = () => {

    mongoose.connect(DB_URL,{userNewUrlParser: true});
    const connection = mongoose.connection
    connection.on('error', () => console.error("Erro ao conectar no Mongo!"));
    
    connection.once('Open', () => console.log("Conectamos no Mongo!"));
}

module.exports = { connect }