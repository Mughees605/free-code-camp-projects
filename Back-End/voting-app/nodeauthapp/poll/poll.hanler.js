
const Poll = require('./poll.model');

module.exports.createPoll = function (req, res) {
    let poll = new Poll({
        creatorId: req.body.creatorId,
        title: req.body.title,
        options: req.body.options
    })

    poll.save(function (err) {
        if (err) return res.send({ 'message': err.message });
        res.send(poll);
    });

}

module.exports.getAll = function (req, res) {
 Poll.find({} , function(err,polls){
     if (err) return res.status(503).json({'message' : err.message})
     res.json(polls);
 })
}

