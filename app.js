const express = require('express');
const bodyParser = require('body-parser');
const todoCtrl = require('./controllers/todoCtrl');

const app = express();

// This is set to ejs because we use ejs as our template engines
app.set('view engine', 'ejs');

// this is host our static webpages, like css and imgs
app.use(express.static('./public'));


// Controllers 
todoCtrl(app);

app.listen(3000);
console.log('Listening to port 3000');