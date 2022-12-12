var express = require('express');
var router = express.Router();
var page ='painel_usuario' 
const painelUsuarioController = require('../controllers/painelUsuarioController')
/* GET home page. */
router.get(('/' + page), painelUsuarioController.index);

module.exports = router;