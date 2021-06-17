const express = require('express');
const path = require('path');
const cors = require('cors');

const { allListings, listingWithId } = require('../database/Marquee/queries.js');
const { Hosts, Locations, ToKnow } = require('../database/Host-Info/index.js');
const { Review, Rating } = require('../database/Reviews/Review.js');
const { City, Home, Activity } = require('../database/Related-Info/index.js');

const app = express();
const PORT = process.env.PORT;

app.use(express.static(path.join(__dirname, '..', 'dist')));
app.use('/listing', express.static(path.join(__dirname, '..', 'dist')));
app.use('/listing/*', express.static(path.join(__dirname, '..', 'dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

/* MARQUEE */

app.get('/', (req, res) => {
  res.status(200).send('Server Firing');
});

app.get('/api/listing/all', (req, res) => {
  console.log('get all listings');
  allListings()
    .then((records) => {
      if (records.length > 0) {
        res.status(200).send(records);
      } else {
        // no records to be had, send no content message
        res.status(204).send();
      }
    })
    .catch((err) => {
      res.status(500).send('Error fetching listings from database: ', err);
    });
});

app.get('/api/listing/random', (req, res) => {
  console.log('get random listing');
  allListings()
    .then((records) => {
      if (records.length > 0) {
        const myRecord = records[Math.floor(Math.random() * records.length)];
        res.send(myRecord);
      } else {
        // no records to be had, send no content message
        res.status(204).send();
      }
    })
    .catch((err) => {
      res.status(500).send('Error fetching listings from database: ', err);
    });
});

// TODO - make a param, for testing Dosh, we are just doing one for pictures
app.get('/api/listing/:listingId', (req, res) => {
  console.log('get specified listing: ', req.params.listingId);
  listingWithId(req.params.listingId)
    .then((record) => {
      if (record) {
        res.status(200).send(record);
      } else {
        res.status(404).send('Cannot find listing with id: ', req.params.listingId);
      }
    })
    .catch((err) => {
      res.status(500).send('Error fetching listing from database: ', err);
    });
});

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

/* REVIEWS */

app.get('/review/', (req, res) => {
  Review.find({})
    .then(data => res.send(data))
    .catch(err => console.log(err));
});

app.get('/rating/:id', (req, res) => {
  Rating.findOne({id: req.params.id})
    .then(data => res.send(data))
    .catch(err => console.log(err));
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

