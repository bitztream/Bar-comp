const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bar-comp', {useCreateIndex: true,  useNewUrlParser: true, useUnifiedTopology: true });

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
  subscriptionEmotes: Array,
  customEmotes: Array,
  customEmotesCount: Number,
});

const Streamer = mongoose.model('Streamer', streamerSchema);

let save = (streamersArray, cb) => {
  Streamer.insertMany(streamersArray, (err) => {
    if (err) {
      console.log(err);
      return
    }
    console.log('Documents saved!');
    cb();
  })
}

let get = (name, cb) => {
  let ob = {_id: 0, __v: 0};
  Streamer.findOne({name}, ob)
    .then((data) => {
      cb(data);
    })
}

module.exports.get = get;
module.exports.save = save;