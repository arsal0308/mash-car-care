const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

require('dotenv').config();
require('./config/database');


const app = express();

// const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)

app.use(logger('dev'));
app.use(express.json());
	

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use(require('./config/checkToken'));

const port = process.env.PORT || 3001;
app.use('/api/users', require('./routes/api/users'));

const ensureLoggedIn = require('./config/ensureLoggedIn');
app.use('/api/items', ensureLoggedIn, require('./routes/api/items'));
app.use('/api/orders', ensureLoggedIn, require('./routes/api/orders'));


app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

  
 app.listen(port, function() {
   console.log(`Express app running on port ${port}`)
 });