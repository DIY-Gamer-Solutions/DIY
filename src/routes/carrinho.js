var express = require('express');
var router = express.Router();
var page ='carrinho' 
const carrinhoController = require('../controllers/carrinhoController')
/* GET home page. */
router.get(('/' + page), carrinhoController.index) ;

module.exports = router;