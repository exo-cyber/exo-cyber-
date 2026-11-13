const { reply, getSender } = require('../lib/helpers');
module.exports = {
  name: 'whoami', alias: [], category: 'PROFILE',
  async run({ sock, msg }) {
    await reply(sock, msg, `You are @${getSender(sock, msg).split('@')[0]}`);
  },
};
