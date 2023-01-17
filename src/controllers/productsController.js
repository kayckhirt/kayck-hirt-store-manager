const router = require('express').Router()
// Aula 23.8 Revisão bloco 23
// const express = require('express');
// const router = express.Router();
const productsService = require('../services/productsService');

router.get('/', async (req, res) => {
  try {
    const products = await productsService.getAll();
    return res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
});

router.get('/products/:id', productsService.getById, async (req, res) => {
const { id } = req.params;

  const { type, message, data } = await productsService.getById(id);
  if (type) return res.status(type).json(message);
    return res.status(200).json(data);

    // console.log(error);
    // res.status(404).json({ message: "Product not found"});
});

module.exports = router;

//CONTROLER