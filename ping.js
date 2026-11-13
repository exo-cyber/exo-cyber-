const { reply } = require('../lib/helpers');
module.exports = {
  name: 'ping', alias: [], category: 'GENERAL',
  async run({ sock, msg }) {
    const t = Date.now();
    await reply(sock, msg, 'Pong.');
    await reply(sock, msg, `${Date.now() - t}ms`);
  },
};
