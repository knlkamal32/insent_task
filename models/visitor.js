const mongoose = require('mongoose');

const VisitorSchema = new mongoose.Schema({
    name : {type : String},
    email : {type : String},
    image : {type : String},
    company : {type : String}
});

module.exports = mongoose.model('visitors',VisitorSchema);