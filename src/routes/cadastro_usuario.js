var express = require('express');
var router = express.Router();
var page ='cadastro_usuario' 
const cadastroUsuarioController = require('../controllers/cadastroUsuarioController')
/* GET home page. */
router.get(('/' + page), cadastroUsuarioController.index) ;

module.exports = router;