const { reply } = require('../lib/helpers');
const { BOT_NAME, PREFIX } = require('../config');
module.exports = {
  name: 'about', alias: [], category: 'GENERAL',
  async run({ sock, msg }) {
    await reply(sock, msg, `${BOT_NAME}\nA mini WhatsApp bot. Personality: nonchalant.\nPrefix: ${PREFIX}`);
  },
};
