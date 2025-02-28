const demo_nodejs = require('../models/Demo_nodejs');
const {mongooseToObject} = require('../../util/mongoose');

class CourseController{
  //GET test_code/:slug
    show(req,res,next){
        demo_nodejs.findOne({slug: req.params.slug})
        .then(course =>{
            res.render('courses/show',{course: mongooseToObject(course)});
        })
        .catch(next);
    }
}

module.exports = new CourseController();