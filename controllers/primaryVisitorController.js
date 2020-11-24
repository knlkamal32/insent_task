const Visitor = require('../models/visitor');
const mongoose = require('mongoose');

const config = require('../utils/config');

const options = {
    useNewUrlParser : true,
    useUnifiedTopology : true
}

const db = mongoose.createConnection(config.primary, options);
var Visitors = db.collection('Visitors');


exports.insertVisitor = (req,res) => {
    const name = req.body.name;
    const email = req.body.email;
    const image = req.body.image;
    const company = req.body.company;
    var newVisitor = new Visitor({
        name : name,
        email : email,
        image  : image,
        company : company
    });
    Visitors.insertOne(newVisitor)
    .then(res.send("Visitor saved!"))
    .catch(err => res.send(err))
};

exports.updateVisitor = (req,res) => {
    const id = req.body._id;
    const name = req.body.name;
    const email = req.body.email;
    const image = req.body.image;
    const company = req.body.company;

    Visitors.updateOne({_id : mongoose.Types.ObjectId(id)},{$set : {name : name, email : email, image : image, company : company}})
    .then(res.send("Visitor updated!"))
    .catch(err => res.send(err))
};

exports.deleteVisitor = (req,res) => {
    var id = req.body._id;
    Visitors.findOneAndDelete({_id : mongoose.Types.ObjectId(id)})
    .then(res.send('Visitor removed!'))
    .catch(err => res.send(err))
};

