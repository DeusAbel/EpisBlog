var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var usuarioSchema = new Schema({  
  nombre:   {type: String, required: true}, 
  correo:   {type: String, required: true, unique: true},
  password: {type: String, required: true}
}); 

var entradaSchema = new Schema({  
  autor_id:           {type: Schema.ObjectId, ref: 'Usuario'}, 
  titulo:             {type: String,  required: true},   
  descripcion:        {type: String,  required: true},
  fecha_creacion:     {type: Date,    required: true}
});

var comentarioSchema = new Schema({    
  autor_id:     {type: Schema.ObjectId, ref: 'Usuario'}, 
  entrada_id:   {type: Schema.ObjectId, ref: 'Entrada'}, 
  comentario:   {type: String,  required: true},  
  fecha:        {type: Date,    required: true},    
});

var usuario       = mongoose.model('Usuario', usuarioSchema);
var entrada       = mongoose.model('Entrada', entradaSchema);
var comentario    = mongoose.model('Comentario', comentarioSchema);

module.exports = usuario;
module.exports = entrada;
module.exports = comentario;