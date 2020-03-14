const mongo = require('./db.js');
const emos = require('./emojis');

const word1 = ['Alpha', '', '', '', '', 'Beta', 'Gamma', 'Delta', 'Master', 'Speed', 'Legendary', 'Love', 'White', "Black", 'Blue', 'Magic', 'Tiny', 'Brutal', 'Technical'];
const word2 = ['Robot', '', '', '', '', "Ninja", "Samurai", "Demon", "John", "Ranger", "", "Elton", "star", "Night", "Bro", "Tony", "Gamer", "Troll", "Wizard", "Soldier"];
const prefix = ['The', "I'mThe", '', '', '', 'Your', 'My'];
const sufix = ['99', 'XX', 'XP', 'GP', 'GT', '2000', '87', '', '', '', '', '', '666', 'Tron', '88', 'GG'];

const emojiList = Object.keys(emos.emos);

const randomStreamerName = function(){
  return [randomElement(prefix), randomElement(word1), randomElement(word2), randomElement(sufix)].join('');
};

const randomElement = function(array){
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

const randomSet = (array) => {
  let result = [];
  let setSize = getRandomInt(16, 61);
  for (let i = 0; i < setSize; i++) {
    let randomIndex = Math.floor(Math.random() * array.length);
    result.push(array[randomIndex]);
  }
  return result;
}

let mongoObjects = [];

for (let i = 0; i < 100; i++) {
  let o = {};
  o.name = randomStreamerName();
  o.avatarPicUrl = 'https://loremflickr.com/80/80';
  o.backgroundPicUrl = 'https://loremflickr.com/600/400';
  o.subscriptionEmotes = [randomElement(emojiList), randomElement(emojiList), randomElement(emojiList), randomElement(emojiList), randomElement(emojiList)];
  o.customEmotes = randomSet(emojiList);
  o.customEmotesCount = o.customEmotes.length;
  mongoObjects.push(o);
}

mongo.save(mongoObjects, () => {
  console.log('All streamers Saved!');
});