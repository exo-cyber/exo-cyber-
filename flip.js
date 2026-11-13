const { reply, pick } = require('../lib/helpers');
module.exports = {
  name: 'flip', alias: [], category: 'FUN',
  async run({ sock, msg }) { await reply(sock, msg, pick(['Heads', 'Tails'])); },
};
