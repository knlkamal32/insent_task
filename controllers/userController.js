const User = require('../models/user');


exports.getUser = (req,res) => {
    var name = req.body.name;
    User.findOne({name : name})
    .then(result => res.send(result))
    .catch(err => console.log(err));
};

exports.getUsers = (req,res) => {
    User.find()
    .then((result) => res.send(result))
    .catch((err) => res.send(err))
};

exports.insertUser = (req,res) => {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    const imageUrl = req.body.imageUrl;
    var newUser = new User({
        email : email,
        password : password,
        name : name,
        imageUrl  : imageUrl
    });
    newUser.save()
    .then(res.send("User saved!"))
    .catch(err => res.send(err))
};

exports.updateUser = (req,res) => {
    const id = req.body._id;
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    const imageUrl = req.body.imageUrl;
    User.updateOne({_id : id}, {email : email,password : password,name : name,imageUrl : imageUrl})
    .then(res.send("User updated!"))
    .catch(err => res.send(err))
};

exports.deleteUser = (req,res) => {
    var id = req.body._id;
    User.deleteOne({_id : id})
    .then(res.send('User removed!'))
    .catch(err => res.send(err))
};

exports.getAggregateUsers = (req,res) => {
    
};
