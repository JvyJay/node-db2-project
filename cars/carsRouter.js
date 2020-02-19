const express = require('express');

const db = require('../data/dbConfig');

const router = express.Router();

router.get('/', (req, res) => {
  db('cars')
    .then(car => {
      res.json(car);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "Can't retrieve data" });
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  db('cars')
    .where({ id })
    .first()
    .then(car => {
      res.json(car);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "Can't retrieve data" });
    });
});

router.post('/', (req, res) => {
  const carData = req.body;
  db('cars')
    .insert(carData)
    .then(ids => {
      db('cars')
        .where({ id: ids[0] })
        .then(newCar => {
          res.status(201).json(newCar);
        });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: 'Failed to store data' });
    });
});

module.exports = router;
