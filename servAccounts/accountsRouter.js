const express = require('express');

const Account = require('./accountSchema.js');
const statusCodes = require('../common/statusCodes.js');

const accountRouter = express.Router();

accountRouter.post('/', function(req, res) {
  const newAccount = new Account(req.body);
  newAccount.save(function(err, account) {
    if (err) {
      res
        .status(statusCodes.serverError)
        .json({
          error: 'Could not create the account.',
        });
    } else {
      res.status(statusCodes.created).json(account);
    }
  });
});

accountRouter.get('/', function(req, res) {
  Account.find({}, function(err, accounts) {
    if (err) {
      res
        .status(statusCodes.serverError)
        .json({ error: 'Could not display all accounts.' });
    } else {
      res.status(statusCodes.success).json(accounts);
    }
  });
});

accountRouter.get('/:id', function(req, res) {
  const { id } = req.params;

  Account.findById(id, function(err, account) {
    if (err) {
      res
        .status(statusCodes.userError)
        .json({ error: 'Could not find account with that ID.' });
    } else {
      res.status(statusCodes.success).json(account);
    }
  });
});

// accountRouter.put('/accounts', (req, res) => {
//   const { id, name, description, budgetedAmount, isActive } = res.body;
// });

// accountRouter.delete('/:id', function(req, res) {
//   const { id } = req.params;

//   Account.findByIdAndRemove(id, function(err, accounts) {
//     if (err) {
//       res
//         .status(statusCodes.userError)
//         .json({ error: 'Could not find account with that ID to delete.' });
//     } else {
//       res.status(statusCodes.success).json(accouts);
//     }
//   });
// });

module.exports = accountRouter;
