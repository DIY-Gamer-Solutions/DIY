var express = require('express');
var router = express.Router();
var page ='finalizacao_compra' 
const finalizacaoCompraController = require('../controllers/finalizacaoCompraController')
/* GET home page. */
router.get(('/' + page), finalizacaoCompraController.index) ;

module.exports = router;