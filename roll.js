const { reply } = require('../lib/helpers');
module.exports = {
  name: 'roll', alias: [], category: 'FUN',
  async run({ sock, msg }) { await reply(sock, msg, String(1 + Math.floor(Math.random() * 6))); },
};
