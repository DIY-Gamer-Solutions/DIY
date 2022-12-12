var express = require('express');
var router = express.Router();
var page ='produto' 
const produtoController = require('../controllers/produtoController')

/* GET home page. */
router.get(('/' + page), produtoController.index );

module.exports = router;