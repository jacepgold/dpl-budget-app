const express = require('express');
const router = express.Router();
const Entry = require('../models').Entry;

router.get('/', (req, res) => {
  Entry.all()
    .then( entries => {
      return res.json(entries);
    }).catch( err => {
      return err.status(400).send(error)
  });
})

router.post('/', (req, res) => {
  const { amt, description, date, type } = req.body;
  Entry.create({ amt, description, date, type })
    .then( entry => {
      return res.json(entry);
    }).catch( error => {
      return res.status(400).send(error)
  });
})

module.exports = router;