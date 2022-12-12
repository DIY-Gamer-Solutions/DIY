var express = require('express');
var router = express.Router();
var page ='finalizacao_endereco' 


const finalizacaoEnderecoController = require('../controllers/finalizacaoEnderecoController')
/* GET home page. */
router.get(('/' + page), finalizacaoEnderecoController.index) ;

module.exports = router;