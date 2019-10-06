const mongoose = require('mongoose');

const PacketSchema = mongoose.Schema({
    timestamp: String,
    author: String,
    value: String
});

module.exports = PacketSchema;