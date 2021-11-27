class NewsController{
    
    //[GET] /news
    index(req, res){
        res.render('news');
    }

    //[GET] /news/:slug
    show(){
        res.send('NEWS DETAIL');
    }
}

module.exports = new NewsController;