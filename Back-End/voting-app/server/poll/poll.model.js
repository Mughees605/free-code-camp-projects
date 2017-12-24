var mongoose = require('mongoose');

var pollSchema = new mongoose.Schema({

    creatorId: { type: mongoose.Schema.Types.ObjectId, required: true },
    title: { type: String, required: true },
    options: {
        type: [{
            name: { type: String, required: true },
            votes: [String]
        }], required: true
    }
}, { timestamps: true })

const Poll = module.exports = mongoose.model('Poll' , pollSchema);