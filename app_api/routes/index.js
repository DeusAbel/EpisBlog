var express = require('express'); 
var router = express.Router(); 
var ctrlUsuarios = require('../controllers/usuarios');
var ctrlComentarios = require('../controllers/comentarios');
var ctrlEntradas = require('../controllers/entradas');    

//Usuarios
router.get('/usuarios',                 ctrlUsuarios.usuariosList);
router.post('/usuarios',                ctrlUsuarios.usuariosCreate);
router.get('/usuarios/:usuario_id',     ctrlUsuarios.usuariosRead);
router.put('/usuarios/:usuario_id',     ctrlUsuarios.usuariosUpdate);
router.delete('/usuarios/:usuario_id',  ctrlUsuarios.usuariosDelete);

//Entradas
router.get('/entradas',                  ctrlEventos.eventosList);
router.post('/entradas',                 ctrlEventos.eventosCreate);
router.get('/entradas/:evento_id',       ctrlEventos.eventosRead);
router.put('/entradas/:evento_id',       ctrlEventos.eventosUpdate);
router.delete('/entradas/:evento_id',    ctrlEventos.eventosDelete);

//Comentarios
router.get('/comentarios',                      ctrlComentarios.comentariosList);
router.post('/comentarios',                     ctrlComentarios.comentariosCreate);
router.get('/comentarios/:comentario_id',       ctrlComentarios.comentariosRead);
router.put('/comentarios/:comentario_id',       ctrlComentarios.comentariosUpdate);
router.delete('/comentarios/:comentario_id',    ctrlComentarios.comentariosDelete);

module.exports = router;