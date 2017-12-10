var mongoose = require('mongoose');

Schema = mongoose.Schema;

var PollSchema = new Schema({
    question:String,
    created:Date,
    owner : { type: mongoose.Schema.Types.ObjectId, ref:'User'},
    owner_name : String,
    totalVotes :Number,
    options : [
        {
            id: Number,
            text: String
        }
    ],
    votes : [],
    voters : [],
    active: Boolean
})