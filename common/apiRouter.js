const express = require('express');

const accountsRouter = require('../servAccounts/accountsRouter.js');

const api = express.Router();

api.use('/accounts', accountsRouter);


module.exports = api;