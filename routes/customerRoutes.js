const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');


router.get('/', async (req, res) => {
  const customers = await Customer.findAll();
  res.render('customers/index', { customers });
});


router.get('/add', (req, res) => res.render('customers/add'));


router.get('/view/:id', async (req, res) => {
  console.log("View customer with ID: ", req.params.id);
  const customer = await Customer.findByPk(req.params.id);
  console.log("Customer details: ", customer);
  res.render('customers/view', { customer });
});



router.get('/edit/:id', async (req, res) => {
  const customer = await Customer.findByPk(req.params.id);
  res.render('customers/edit', { customer });
});



router.post('/add', async (req, res) => {
  const { name, address, neighborhood } = req.body;
  await Customer.create({ name, address, neighborhood });
  res.redirect('/customers');
});


router.post('/edit/:id', async (req, res) => {
  const { name, address, neighborhood } = req.body;
  await Customer.update({ name, address, neighborhood }, { where: { id: req.params.id } });
  res.redirect('/customers');
});


router.get('/delete/:id', async (req, res) => {
  await Customer.destroy({ where: { id: req.params.id } });
  res.redirect('/customers');
});

module.exports = router;
