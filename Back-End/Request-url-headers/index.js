var app = require('express')();
var bodyparser = require('body-parser');
var cors = require('cors');
var port = process.env.PORT || 8080
app.use(bodyparser.json());
app.use(cors());

app.get('/api/whoai',function(req,res,next){
   
})

app.listen(port,function(){
    console.log(`working on localhost ${port}`)
})