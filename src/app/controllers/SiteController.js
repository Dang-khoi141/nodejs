const demo_nodejs = require('../models/Demo_nodejs');
const {multipleMongooseToObject} = require('../../util/mongoose');

class SiteController{
    // GET
  
    index(rep,res,next){
        demo_nodejs.find({})
            .then(courses => {
                res.render('home',{
                    courses: multipleMongooseToObject(courses)
                })
            })
            .catch(error => next(error))
    }

    //GET search
    search(req,res){
        res.render('search');
    }
}

module.exports = new SiteController();