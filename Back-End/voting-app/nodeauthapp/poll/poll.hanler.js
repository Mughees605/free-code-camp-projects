
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
    Poll.find({}, function (err, polls) {
        if (err) return res.status(503).json({ 'message': err.message })
        res.json(polls);
    })
}

module.exports.getmyPolls = function (req, res) {
    var creatorId = req.params['uid'];
    Poll.find({ 'creatorId': creatorId }, function (err, polls) {
        if (err) return res.status(503).json({ 'message': err.message })
        res.json(polls);
    })
}

module.exports.getPollById = function (req, res) {
    res.json(req.poll);
}

module.exports.addVote = function (req, res) {
    let ipAddress = req.headers['x-forwarded-for'] || req.ip;

    if (req.canVote) {
        let votes = req.options.votes;
        votes.push('192.168.0.1');
        req.poll.save(function (err) {
            if (err) return res.status(503).json({ 'message': err.message });
            res.json(req.poll);
        })
    }
    else {
        return res.status(409).json({ 'message': "Already voted that IP." })
    }
}

