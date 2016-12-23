var express = require('express'); 
var router = express.Router(); 
var ctrlUsuarios = require('../controllers/usuarios');
var ctrlComentarios = require('../controllers/comentarios');
var ctrlEntradas = require('../controllers/entradas');    

//módulos básicos para un blog

//Usuarios
router.post('/usuarios',                ctrlUsuarios.usuariosCreate);
router.get('/usuarios/:usuario_id',     ctrlUsuarios.usuariosRead);
router.put('/usuarios/:usuario_id',     ctrlUsuarios.usuariosUpdate);
router.delete('/usuarios/:usuario_id',  ctrlUsuarios.usuariosDelete);

//Entradas
router.post('/entradas',                 ctrlEntradas.entradasCreate);
router.get('/entradas/:evento_id',       ctrlEntradas.entradasRead);
router.put('/entradas/:evento_id',       ctrlEntradas.entradasUpdate);
router.delete('/entradas/:evento_id',    ctrlEntradas.entradasDelete);

//Comentarios
router.post('/comentarios',                     ctrlComentarios.comentariosCreate);
router.get('/comentarios/:comentario_id',       ctrlComentarios.comentariosRead);
router.put('/comentarios/:comentario_id',       ctrlComentarios.comentariosUpdate);
router.delete('/comentarios/:comentario_id',    ctrlComentarios.comentariosDelete);

module.exports = router;