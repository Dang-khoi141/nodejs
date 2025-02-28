
const newsroute = require('./news') ;
const siteroute = require('./site')
function route(app){

    app.use('/news',newsroute); 
    app.use('/', siteroute);


    // app.get('/', (req, res) => {
    //     res.render('home');
    // });
    
    // Local host ---Hosting
    
    // app.get('/search', (req, res) => {
    //     console, log(req.query.q);
    //     res.render('search');
    // });
    
    // app.post('/search',(req,res)=>{
    //   res.send('');
    // })
}

module.exports = route;