// const express = require('express');
const bodyParser = require('body-parser');
const todoCtrl = require('./controllers/todoCtrl');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('./public'));


// Controllers 
todoCtrl(app)

app.listen(3000);
console.log('Listening to port 3000');