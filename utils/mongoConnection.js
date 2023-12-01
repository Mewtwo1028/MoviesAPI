const mongoose = require('mongoose');

mongoose.connect(
    `mongodb+srv://root:C8NiLMyvKEyvMslK@libreria.8tfo6mr.mongodb.net/libreria-db?retryWrites=true&w=majority`
    )
.then(() => console.log('Conexion exitosa a mongoDB'))
.catch(err => console.error('Error al conectar a MongoDB', err));

module.exports = mongoose;