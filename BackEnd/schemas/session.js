const mongoose = require('mongoose');
const Packet = require('./packet');

const SessionSchema = mongoose.Schema({
    code: String,
    count: Number,
    created: String,
    packets: [Packet]
});

const Session = mongoose.model('session', SessionSchema);

module.exports = Session;