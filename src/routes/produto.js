var express = require('express');
var router = express.Router();
var page ='produto' 
/* GET home page. */
router.get(('/' + page), function(req, res, next) {
  res.render( page, { title: 'DIY - Gamer Solutions',css:'stylesheets/'+page+'.css' });
});

module.exports = router;