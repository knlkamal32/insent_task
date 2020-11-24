const User = require('../models/user');
const mongoose = require('mongoose');
const config = require('../utils/config')

const options = {
    useNewUrlParser : true,
    useUnifiedTopology : true
}
var db = mongoose.createConnection(config.primary,options);
var Users = db.collection('Users');


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
    
    Users.insertOne(newUser)
    .then(res.send('User saved!')
    .catch(err => res.send(err)))
};

exports.updateUser = (req,res) => {
    const id = req.body._id;
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    const imageUrl = req.body.imageUrl;
   
    Users.updateOne({_id : mongoose.Types.ObjectId(id)},{$set : {email : email,password : password,name : name,imageUrl : imageUrl}})
    .then(res.send("User updated!"))
    .catch(err => res.send(err))
    
};

exports.deleteUser = (req,res) => {
    var id = req.body._id;
    Users.findOneAndDelete({_id : mongoose.Types.ObjectId(id)})
    .then(res.send('User deleted!'))
    .catch(err  => res.send(err))
};
