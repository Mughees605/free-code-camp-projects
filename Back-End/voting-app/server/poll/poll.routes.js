const express = require('express');
const router = express.Router();
const pollHandlers = require('./poll.hanler');
const Poll = require('./poll.model');

router.param('pollId', function (req, res, next, id) {
    Poll.findOne({ '_id': id }, function (err, poll) {
        if (err) res.status(503).json({ 'message': err.message })
        req.poll = poll
        return next();
    })
})

let canVote = function (req, res, next) {
    let ipAddress = req.headers['x-forwarded-for'] || req.ip
    if (req.poll._id) {
        Poll.findOne({ '_id': req.poll._id, 'options.votes': '192.168.0.1' }, function (err, option) {
            if (err) next(err);
            req.canVote = !option;
            req.poll['canVote'] = !option;
            next()
        })
    }
}

router.param('optionId', function (req, res, next, id) {
    req.options = req.poll.options.id(id) // options [{}]
    if (!req.options) {
        let err = new Error('Not Found');
        err.status = 404;
        next(err);
    }
    next();
})

router.route('/createPoll')
    // POST - creates new poll
    .post(pollHandlers.createPoll)

router.route('/getAll')
    // GET all polls

    .get(pollHandlers.getAll)

router.route('/:uid/mypolls')
    // GET MY POLLS
    .get(pollHandlers.getmyPolls)

router.route('/:pollId')
    // GET POLL BY ID
    .get(canVote, pollHandlers.getPollById)

router.route('/:pollId/options/:optionId/vote')

    .get(canVote, pollHandlers.addVote)

module.exports = router;
