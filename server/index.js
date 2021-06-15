const express = require('express');
const path = require('path');
const cors = require('cors');

const { Hosts, Locations, ToKnow } = require('../database/Host-Info/index.js');
const { City, Home, Activity } = require('../database/Related-Info/index.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '..', 'dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

/* HOST INFO */

app.get('/static', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'bundle.js'));
});

app.get('/hostInfo/:id', async (req, res) => {
  try {
    const data = await Hosts.findOne({ properties: req.params.id }).exec();
    res.status(200).send(data);
  } catch (err) {
    res.status(404).send(err);
  }
});

app.get('/location/:id', async (req, res) => {
  try {
    const data = await Locations.findOne({ properties: req.params.id }).exec();
    res.status(200).send(data);
  } catch (err) {
    res.status(404).send(err);
  }
});

app.get('/toKnow/:id', async (req, res) => {
  try {
    const data = await ToKnow.findOne({ id: req.params.id }).exec();
    res.status(200).send(data);
  } catch (err) {
    res.status(404).send(err);
  }
});

app.put('/email/:id', async (req, res) => {
  try {
    const result = await Hosts.findByIdAndUpdate(req.params.id, { $push: { messages: req.body } })
      .exec();
    res.status(202).send(result);
  } catch (err) {
    res.status(404).send(err);
  }
});

/* RELATED INFO */

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

