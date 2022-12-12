module.exports= {
    index:(req,res) => {
        
        return res.render('index', { title: 'DIY - Gamer Solutions',css:'stylesheets/home.css' });
    }

};