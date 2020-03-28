const mongo = require('./db.js');
const emos = require('./emojis');

const word1 = ['Alpha', '', '', 'Beta', 'Gamma', 'Delta', 'Master', 'Speed', 'Legend', 'Love', 'White', 'Black', 'Blue', 'Magic', 'Tiny', 'Brutal', 'Technical'];
const word2 = ['Robot', '', '', '', 'Mon', 'Jay', 'Tim', 'Jeff', '1Up', 'Ninja', 'Samurai', 'Demon', 'John', 'Ranger', 'Max', 'Elton', 'star', 'Night', 'Bro', 'Tony', 'Gamer', 'Troll', 'Wizard', 'Soldier'];
const prefix2 = ['The', '', '', 'Your', 'My'];
const prefix1 = ['0', 'gg', 'xX', '-', '00'];
const sufix1 = ['99', 'XX', 'XP', 'GP', 'GT', '2000', '87', '', '', '666', 'Tron', '88', 'GG'];
const sufix2 = ['Xx', ''];

const emojiList = Object.keys(emos.emos);

const randomElement = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

const randomStreamerName = () => [randomElement(prefix1), randomElement(prefix2), randomElement(word1), randomElement(word2), randomElement(sufix1), randomElement(sufix2)].join('');

const getRandomInt = (floor, celing) => {
  const min = Math.ceil(floor);
  const max = Math.floor(celing);
  return Math.floor(Math.random() * (max - min)) + min;
};

const randomSet = (array) => {
  const result = [];
  const setSize = getRandomInt(16, 61);
  for (let i = 0; i < setSize; i += 1) {
    const randomIndex = Math.floor(Math.random() * array.length);
    result.push(array[randomIndex]);
  }
  return result;
};

const mongoObjects = [];

for (let i = 0; i < 100; i += 1) {
  const o = {};
  o.name = randomStreamerName();
  o.avatarPicUrl = 'https://loremflickr.com/80/80';
  o.backgroundPicUrl = 'https://loremflickr.com/600/400';
  o.subscriptionEmotes = [randomElement(emojiList), randomElement(emojiList), randomElement(emojiList), randomElement(emojiList), randomElement(emojiList)];
  o.customEmotes = randomSet(emojiList);
  o.customEmotesCount = o.customEmotes.length;
  o.followersCount = getRandomInt(0, 20000);
  o.subscribers = getRandomInt(0, 1000);
  mongoObjects.push(o);
}

mongo.save(mongoObjects, () => {
  console.log('All streamers Saved! Disconnecting');
  mongo.mongoose.disconnect();
});
