var express = require('express');
var router = express.Router();
var page ='produto_detalhes' 

const produtoDetalhesController = require('../controllers/produtoDetalhesController')
/* GET home page. */
router.get(('/' + page),produtoDetalhesController.index );

module.exports = router;