var app = require('express')();
var bodyparser = require('body-parser');
var cors = require('cors');
var port = process.env.PORT || 8080
app.use(bodyparser.json());
app.use(cors());

app.get('/timestamp/:date',function(req,res,next){
    var natural , unix;
    var value = req.params.date;

    var formattedDate = {
        year: 'numeric',
        month: 'long',
        day : 'numeric'
    }
     
    if(isNaN(value)){
        natural = new Date(value).toLocaleDateString('en-us',formattedDate);
        unix = new Date(value).getTime()/1000 
    }
    else{
        unix = value;
        natural = new Date(value * 1000).toLocaleDateString('en-us',formattedDate)
    }
    res.send({ unix:unix , natural, natural});
})

app.listen(port,function(){
    console.log(`working on localhost ${port}`)
})