var express = require('express');
var router = express.Router();
var page ='cad_prod' 

const cadProdController = require('../controllers/cadProdController')
/* GET home page. */
router.get(('/' + page), cadProdController.index) ;

module.exports = router;