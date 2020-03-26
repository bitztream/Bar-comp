const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bar-comp', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to DB!');
});

const streamerSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  avatarPicUrl: String,
  backgroundPicUrl: String,
  subscriptionEmotes: Array,
  customEmotes: Array,
  customEmotesCount: Number,
  followersCount: Number,
  subscribers: Number,
});

const Streamer = mongoose.model('Streamer', streamerSchema);

const save = (streamersArray, cb) => {
  Streamer.insertMany(streamersArray, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('Documents saved!');
    cb();
  });
};

const get = (name, cb) => {
  const ob = { _id: 0, __v: 0 };
  Streamer.findOne({ name }, ob)
    .then((data) => {
      cb(data);
    });
};

const update = (name, value, cb) => {
  const object = { $inc: { followersCount: value } };
  Streamer.update({ name }, object)
    .then(data => {
      console.log(Object.keys(data));
      cb();
    });
};

const getRandomInt = (floor, celing) => {
  const min = Math.ceil(floor);
  const max = Math.floor(celing);
  return Math.floor(Math.random() * (max - min)) + min;
};

const getRandom = (cb) => {
  const ob = {
    _id: 0, __v: 0, subscribers: 0, followersCount: 0,
  };
  Streamer.findOne({}, ob).limit(1).skip(getRandomInt(1, 100))
    .then((data) => {
      cb(data);
    });
};

module.exports.get = get;
module.exports.getRandom = getRandom;
module.exports.save = save;
module.exports.update = update;
