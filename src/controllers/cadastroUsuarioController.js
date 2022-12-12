module.exports= {
    index:(req,res) => {
        const page = 'cadastro_usuario';
        return res.render( page, { title: 'DIY - Gamer Solutions',css:'stylesheets/'+page+'.css' });
    }

};