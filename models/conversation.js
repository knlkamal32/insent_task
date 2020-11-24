const mongoose = require('mongoose');

const ConversationSchema = new mongoose.Schema({
    name: {type : String},
    users: [{
        userId: {type : mongoose.Schema.Types.ObjectId},
        type: {type : String, enum : ['User','Visitor']}
    }],
    logs: [{
        message: {type : String},
        senderId: {type : mongoose.Schema.Types.ObjectId},
        timestamp: {type : Number},
        senderType: {type : String, enum : ['User', 'Visitor']}
    }]

});

module.exports = mongoose.model('Conversation',ConversationSchema);