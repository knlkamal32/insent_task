const Visitor = require('../models/visitor')

exports.getVisitor = (req,res) => {
    var name = req.body.name;
    Visitor.findOne({name : name})
    .then(result => res.send(result))
    .catch(err => console.log(err));
};

exports.getVisitors = (req,res) => {
    Visitor.find()
    .then((result) => res.send(result))
    .catch((err) => console.log(err))
};

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
    newVisitor.save()
    .then(res.send("Visitor saved!"))
    .catch(err => res.send(err))
};

exports.updateVisitor = (req,res) => {
    const id = req.body._id;
    const name = req.body.name;
    const email = req.body.email;
    const image = req.body.image;
    const company = req.body.company;

    Visitor.updateOne({_id : id}, {name : name, email : email, image : image, company : company})
    .then(res.send("Visitor updated!"))
    .catch(err => res.send(err))
};

exports.deleteVisitor = (req,res) => {
    var id = req.body._id;
    Visitor.deleteOne({_id : id})
    .then(res.send('Visitor removed!'))
};

exports.getAggregateVisitors = (req,res) => {
    
};