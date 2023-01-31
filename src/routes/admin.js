var express = require('express');
var router = express.Router();
var page ='admin'

const maquinas = [
  { id: 1, titulo: "Hover 22", placa: "Nvidea12"},
  { id: 2, titulo: "UHT DX", placa: "Nvidea13"},
  { id: 4, titulo: "DNH 147", placa: "Nvidea14"},
  { id: 5, titulo: "USER 147", placa: "Nvidea15"}
]

router.get(('/' + page), function(req, res, next) {
  res.render( page, { title: 'DIY - Gamer Solutions',css:'stylesheets/'+page+'.css', maquinas });
});

router.get('/adicionar', (req, res) => {
  res.render('adicionar-maquina')
});

module.exports = router;