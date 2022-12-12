module.exports= {
    index:(req,res) => {
        const page = 'finalizacao_endereco';
        return res.render( page, { title: 'DIY - Gamer Solutions',css:'stylesheets/'+page+'.css' });
    }

};