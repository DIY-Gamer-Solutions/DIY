module.exports= {
    index:(req,res) => {
        const page = 'produto_detalhes';
        return res.render( page, { title: 'DIY - Gamer Solutions',css:'stylesheets/'+page+'.css',js:'javascripts/'+page+'.js' });
    }

};