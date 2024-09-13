const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');


router.get('/', async (req, res) => {
    const customers = await Customer.findAll();
    res.render('customers/index', { customers });
  });


router.get('/add', (req, res) => res.render('customers/add'));


router.get('/view/:id', async (req, res) => {
    const customer = await Customer.findByPk(req.params.id);
    res.render('customers/view', { customer });
  });



  router.get('/edit/:id', async (req, res) => {
    const customer = await Customer.findByPk(req.params.id);
    res.render('customers/edit', { customer });
  });


router.post('/add', async (req, res) => {
    const { nome, telefone, origem, dataDoContacto, observacao } = req.body;
    await Customer.create({ nome, telefone, origem, dataDoContacto, observacao });
    res.redirect('/customers');
  });


  router.post('/edit/:id', async (req, res) => {
    const { nome, telefone, origem, dataDoContacto, observacao } = req.body;
    await Customer.update({ nome, telefone, origem, dataDoContacto, observacao }, { where: { id: req.params.id } });
    res.redirect('/customers');
  });


  router.get('/delete/:id', async (req, res) => {
    await Customer.destroy({ where: { id: req.params.id } });
    res.redirect('/customers');
  });

module.exports = router;
