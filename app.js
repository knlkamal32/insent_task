const express = require('express');
const bodyParser = require('body-parser');
const mongoConnect = require('./utils/database').mongoConnect;


const routes = require('./routes/routes');



const app = express();

app.use(bodyParser.urlencoded({extended : false}));

app.use('/', routes);


mongoConnect()
.then(app.listen(3000, () => console.log('Server is running...')))
