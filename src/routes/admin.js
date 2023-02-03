var express = require('express');
var router = express.Router();
var page ='admin'
const fs = require('fs');
const path = require('path');


const maquinasPath = path.resolve(__dirname, '../database/produtos.json')


function getMaquinas () {
  return JSON.parse(fs.readFileSync(maquinasPath));
}

function saveMaquinas (maquinas) {
  fs.writeFileSync(maquinasPath, JSON.stringify(maquinas,null, 4));
}


/* GET home page. */
router.get(('/' + page), function(req, res, next) {
  res.render( page, { title: 'DIY - Gamer Solutions',css:'stylesheets/'+page+'.css', maquinas:getMaquinas()});
});

router.get('/adicionar', (req, res) => {
  res.render('adicionarMaquina', {css: 'stylesheets/adicionarMaquina.css', title:'DIY - Gamer Solutions'});
});

router.post('/' + page, function(req, res){
  const maquinas = getMaquinas();
  maquinas.push({ id: maquinas.at(-1).id + 1, ...req.body });

  saveMaquinas(maquinas);
  res.redirect('/admin');
});
 
router.delete('/deletar/:id', (req, res) => {
  const id = req.params.id;
  let maquinas = getMaquinas();

  maquinas = maquinas.filter(maquina => maquina.id != id);

  saveMaquinas(maquinas);
  res.redirect('/admin');
});

module.exports = router;