const articles = require('../model/articles');

function addArticle(req, res, next){
    articles.create({
        title: req.body.title,
        urlImage: req.body.urlImage,
        description: req.body.description
    })
    .then(function(){
        res.status(201).json({
            message: "article berhasil ditambahkan"
        })
    })
    .catch(function(err){
        res.status(500).json({
            error: err,
        })
    })
}

function getArticles(req, res, next){
    articles.findAll()
  .then(function(articles){
    res.status(200).json(articles)
   })
   .catch(err=> console.error(err));
  }

  function backfillArticle(req, res, next){
    articles.bulkCreate([{
        title: "Article 1",
        urlImage: "https://i.ytimg.com/vi/QWB-yrCBw9Y/hqdefault.jpg",
        description: "Ini Berita Pertama"
    },
    {
        title: "Article 2",
        urlImage: "https://t3n.de/news/wp-content/uploads/2022/12/EQE-e1672242194293.jpg",
        description: "Ini Berita Kedua"
    },
    {
        title: "Article 3",
        urlImage: "https://cdn.mos.cms.futurecdn.net/c3RwNWN8XeDGfgrBXGaR4f-1200-80.jpg",
        description: "Ini berita ketiga"
    }])
        .then(()=> res.json({message: "Successfully backfilled in"}))
        .catch(err=> {
            console.error(err);
            res.status(500).json({
                error: err
            })
        });
  }


module.exports = {addArticle, getArticles, backfillArticle}