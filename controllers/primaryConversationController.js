const Conversation = require('../models/conversation');
const mongoose = require('mongoose');

const config = require('../utils/config');

const options = {
    useNewUrlParser : true,
    useUnifiedTopology : true
}

const db = mongoose.createConnection(config.primary, options);
var Conversations = db.collection('Conversations');

exports.getConversation = (req,res) => {
    var name = req.body.name;
    Conversations.findOne({name : name})
    .then(result => res.send(result))
    .catch(err => res.send(err))
};

exports.getConversations = (req,res) => {
    Conversations.find().toArray()
    .then(result => res.send(result))
    .catch(err => res.send(err))
};

exports.insertConversation = (req,res) => {
    var name = req.body.name;
    var id = req.body._id;
    var type = req.body.type;
    var message = req.body.message;
    var timestamp = new Date();

    const newConversation = new Conversation({
        name : name,
        users : [{
            userId : id,
            type : type
        }],
        logs : [{
            message : message,
            senderId : id,
            timestamp : timestamp,
            senderType : type
        }]
    })
    Conversations.insertOne(newConversation)
    .then(res.send('Conversation added!'))
    .catch(err => res.send(err))
};

exports.updateConversation = (req,res) => {
    var name = req.body.name;
    var id = req.body._id;
    var type = req.body.type;
    var message = req.body.message;

    Conversations.updateOne({_id : mongoose.Types.ObjectId(id)}, { $set : {
        name : name,
        users : [{
            userId : id,
            type : type
        }],
        logs : [{
            message : message,
            senderId : id,
            timestamp : new Date(),
            senderType : type
        }]}})
        .then(res.send('Conversation updated!'))
        .catch(err => res.send(err))
};

exports.deleteConversation = (req,res) => {
    var id = req.body._id;
    Conversations.findOneAndDelete({_id : mongoose.Types.ObjectId(id)})
    .then(res.send('Conversation deleted'))
    .catch(err => res.send(err))
};

