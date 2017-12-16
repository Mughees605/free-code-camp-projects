
const Poll = require('./poll.model');

module.exports.createPoll = function (req, res) {
    console.log(req.body)
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