module.exports= {
    index:(req,res) => {
        const page = 'produto';
        return res.render( page, { title: 'DIY - Gamer Solutions',css:'stylesheets/'+page+'.css' });
    }

};