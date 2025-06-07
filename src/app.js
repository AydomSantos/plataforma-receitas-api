require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./routes/routes');
app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

module.exports = app;