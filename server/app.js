const express = require('express');
const path = require('path');
const mongo = require('./db.js');

const app = express();
const port = 8000;

app.use(express.static(path.join(__dirname, '../client/public')));
app.use(express.json());

app.listen(port, () => {
  console.log(`listenning on port ${port}`);
});

app.get('/streamers/random', (req, res) => {
  console.log('Fetching data on Random Streamer ');
  mongo.getRandom((data) => {
    console.log('Data fetched from DB: ', data);
    res.send(data);
  });
});

app.get('/streamers/:name', (req, res) => {
  let streamerName = req.params.name;
  console.log('Fetching data on: ', req.params.name);
  mongo.get(streamerName, (data) => {
    console.log('Data fetched from DB: ', data);
    res.send(data);
  });
});
