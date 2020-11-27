const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// MIDDLEWARES
app.use(bodyParser.json());

//FOR PROTECTING THE DB CREDENTIALS
require('dotenv/config');

//BASIC ROUTE 
app.get('/', (req, res) => {
    res.send('Welocome to Home');
});

//IMPORT ADDITIONAL ROUTES
const articleRoute = require('./routes/articles')
app.use('/articles', articleRoute)

const categoryRoute = require('./routes/categories')
app.use('/categories', categoryRoute)

//DB CONNECTION
mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true }, () => console.log('Connected to MongoDB'));

//LISTENING TO THE SERVER
app.listen(3001);