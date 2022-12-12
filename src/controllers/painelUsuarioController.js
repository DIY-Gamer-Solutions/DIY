module.exports= {
    index:(req,res) => {
        const page = 'painel_usuario';
        return res.render( page, { title: 'DIY - Gamer Solutions',css:'stylesheets/'+page+'.css' });
    }

};