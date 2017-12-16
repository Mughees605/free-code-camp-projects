const express = require('express');
const router = express.Router();
const pollHandlers = require('./poll.hanler');

router.post('/createPoll' , pollHandlers.createPoll)

module.exports = router;

