const mongoose = require('mongoose');

const config = require('../utils/config')

const options = {
    useNewUrlParser : true,
    useUnifiedTopology : true,
}

var db = mongoose.createConnection(config.rsOne,options);
var Users = db.collection('Users');

exports.getUser = (req,res) => {
    var name = req.body.name;
    Users.findOne({name : name})
    .then(result => res.send(result))
    .catch(err => res.send(err))
    
};

exports.getUsers = (req,res) => {
   Users.find().toArray()
   .then(result => res.send(result))
   .catch(err => res.send(err))
    
};

