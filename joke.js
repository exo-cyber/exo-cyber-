const { reply, pick } = require('../lib/helpers');
const JOKES = [
  'I told my computer I needed a break. Now it will not stop sending me KitKat ads.',
  'Why do programmers prefer dark mode? Light attracts bugs.',
  'There are 10 kinds of people: those who get binary and those who do not.',
];
module.exports = {
  name: 'joke', alias: [], category: 'FUN',
  async run({ sock, msg }) { await reply(sock, msg, pick(JOKES)); },
};
