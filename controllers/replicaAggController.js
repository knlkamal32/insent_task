const mongoose = require('mongoose');

const config = require('../utils/config');

const options = {
    useNewUrlParser : true,
    useUnifiedTopology : true
}

const db = mongoose.createConnection(config.rsThree, options);
var Users = db.collection('Users');
var Visitors = db.collection('Visitors');
var Conversations = db.collection('Conversations');


exports.getAggregateUsers = (req,res) => {
   Users.aggregate(
       //aggregation conditions
   )
};

exports.getAggregateVisitors = (req,res) => {
    Visitors.aggregate(
        //aggregation conditions
    )
};

exports.getAggregateConversations = (req,res) => {
    Conversations.aggregate(
        //aggregation conditions
    )
};