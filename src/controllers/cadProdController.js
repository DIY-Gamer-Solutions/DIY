module.exports= {
    index:(req,res) => {
        const page = 'cad_prod';
        return res.render( page, { title: 'DIY - Gamer Solutions',css:'stylesheets/'+page+'.css' });
    }

};