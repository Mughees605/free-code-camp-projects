const express = require('express');
const router = express.Router();
const pollHandlers = require('./poll.hanler');

// POST - creates new poll
router.post('/createPoll' , pollHandlers.createPoll)

// GET all polls
router.get('/getAll' , pollHandlers.getAll)

module.exports = router;

