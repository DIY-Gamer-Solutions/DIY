module.exports= {
    index:(req,res) => {
        const page = 'finalizacao_compra';
        return res.render( page, { title: 'DIY - Gamer Solutions',css:'stylesheets/'+page+'.css' });
    }

};