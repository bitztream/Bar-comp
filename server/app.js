const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname, '../client/public')));

app.listen(port, () => {
  console.log(`listenning on port ${port}`);
});

mongoose.connect('mongodb://localhost/bar-comp', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to DB!');
});

const streamerSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true
  },
  avatarPicUrl: String,
  backgroundPicUrl: String,
  subscriptionEmoteSetUrl: String,
  customEmoteSetURL: String,
  customEmoteCount: Number,
});

const Streamer = mongoose.model('Streamer', streamerSchema);

let test1 = new Streamer({
  name: 'JohnDow',
  avatarPicUrl: 'fakeURL1.com',
  backgroundPicUrl: 'fakeURL2.com',
  suscriptionEmotesSetUrl: 'fakeURL3.com',
  customEmotesSetURL: 'fakeURL4.com',
  customEmotesCount: 44
});

test1.save((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Successfully inserted into DB!');
})

