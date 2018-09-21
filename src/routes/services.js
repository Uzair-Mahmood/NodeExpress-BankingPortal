const express = require('express');

const router = express.Router();
const { accounts, writeJSON } = require('../data');

router.get('/transfer', (req, res) => {
  res.render('transfer');
})
  .post('/transfer', (req, res) => {
    accounts[req.body.from].balance -= req.body.amount;
    accounts[req.body.to].balance = parseInt(accounts[req.body.to].balance, 10) + parseInt(req.body.amount, 10);
    writeJSON();
    res.render('transfer', { message: 'Transfer Completed' });
  });

router.get('/payment', (req, res) => {
  res.render('payment', { account: accounts.credit });
})
  .post('/payment', (req, res) => {
    console.log(req.body);
    accounts.credit.balance -= req.body.amount;
    accounts.credit.available = parseInt(accounts.credit.available, 10) + parseInt(req.body.amount, 10);
    writeJSON();
    res.render('payment', { message: 'Payment Successful', account: accounts.credit });
  });

module.exports = router;
