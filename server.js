const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const apiRouter = require('./common/apiRouter.js');

const server = express();

server.use(cors());
server.use(bodyParser.json());

server.use('/api', apiRouter);

mongoose.Promise = global.Promise;
mongoose
  .connect('mongodb://localhost:27017/accounts', { useMongoClient: true })
  .then(function (db) {
    server.listen(5000, function () {
      console.log('Server running on port 5000');
    });
  })
  .catch(function (err) {
    console.log('Database connection failed', err.message);
  });