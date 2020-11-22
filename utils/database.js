const mongoose = require('mongoose');
const config = require('./config');

mongoose.Promise = global.Promise;
const mongoConnect = () => mongoose.connect(config.firstUrl,{useNewUrlParser : true, useUnifiedTopology : true})
.catch(err => console.log(err))


exports.mongoConnect = mongoConnect;