const mongoose = require('mongoose');

const config = require('../utils/config');

const options = {
    useNewUrlParser : true,
    useUnifiedTopology : true
}

const db = mongoose.createConnection(config.rsTwo, options);
var Visitors = db.collection('Visitors');

exports.getVisitor = (req,res) => {
    var name = req.body.name;
    Visitors.findOne({name : name})
    .then(result => res.send(result))
    .catch(err => console.log(err));
};

exports.getVisitors = (req,res) => {
    Visitors.find().toArray()
    .then((result) => res.send(result))
    .catch((err) => console.log(err))
};

