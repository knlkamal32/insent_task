const mongoose = require('mongoose');

const ConversationSchema = new mongoose.Schema({
    name: {type : String},
    users: [{
        userId: {type : mongoose.Schema.Types.ObjectId},
        type: Enum(user, visitor)
    }],
    logs: [{
        message: {type : String},
        senderId: {type : mongoose.Schema.Types.ObjectId},
        timestamp: { type : Number},
        senderType: Enum(user, visitor)
    }]

});

module.exports = mongoose.model('conversations',ConversationSchema);