var express = require('express');
var router = express.Router();
var ctrlUsuarios = require('../controllers/usuarios');
//var ctrlNoticias = require('../controllers/noticias');

/* Locations pages */
/*router.get('/', ctrlLocations.homelist);*/
router.get('/', function (req, res, next) {
    res.render('index', { title: 'EpisBlog' });
});

router.post('/usuarios', ctrlUsuarios.registrar);
router.get('/usuarios', ctrlUsuarios.listar);
router.get('/usuarios/:usuario_id', ctrlUsuarios.leer);
//router.put('/usuarios/:usuario_id', ctrlUsuarios.modificar);
//router.delete('/usuarios/:usuario_id', ctrlUsuarios.eliminar);


/* Other pages */
//router.get('/about', ctrlOthers.about);

module.exports = router;
