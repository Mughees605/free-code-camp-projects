var app = require('express')();
var bodyparser = require('body-parser');
var cors = require('cors');
var port = process.env.PORT || 8080
app.use(bodyparser.json());
app.use(cors());

app.get('/api/whoai', function (req, res, next) {
  
    // https://stackoverflow.com/questions/8107856/how-to-determine-a-users-ip-address-in-node
    var ip = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        (req.connection.socket ? req.connection.socket.remoteAddress : null);

    let obj = {
        ip: ip,
        language: req.headers['accept-language'].split(',')[0],
        OS: req.headers['user-agent'].split(') ')[0].split(' (')[1],
    }
    res.send(obj);
})

app.listen(port, function () {
    console.log(`working on localhost ${port}`)
})