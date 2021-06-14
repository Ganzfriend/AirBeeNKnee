const express = require('express');
const path = require('path');
const cors = require('cors');

const { City, Home, Activity } = require('../database/index.js');

const app = express();
const { PORT } = process.env;

app.use(express.static(path.join(__dirname, '..', 'dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

////////////////////////////////////////

app.get('/cities', (req, res) => {
  City.find({})
    .then(data => res.send(data))
    .catch(err => res.send(err));
});

////////////////////////////////////////

app.get('/homes/:city', (req, res) => {
  const { city } = req.params;
  Home.find({ city })
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
});

////////////////////////////////////////

app.get('/activities/:city', (req, res) => {
  const { city } = req.params;
  Activity.find({ city })
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
});

////////////////////////////////////////

app.patch('/homes/:id', (req, res) => {
  const { liked } = req.body;
  const _id = req.params.id;
  Home.updateOne({ _id }, { liked })
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
});

////////////////////////////////////////

app.patch('/activities/:id', (req, res) => {
  const { liked } = req.body;
  const _id = req.params.id;
  Activity.updateOne({ _id }, { liked })
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
});

////////////////////////////////////////

app.listen(PORT, () => {
  console.log(`server is running and listening on port ${PORT}`);
});
