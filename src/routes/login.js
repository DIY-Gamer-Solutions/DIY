var express = require('express');
var router = express.Router();
var page ='login' 
const loginController = require('../controllers/loginController')
/* GET home page. */
router.get(('/' + page), loginController.index) ;

module.exports = router;