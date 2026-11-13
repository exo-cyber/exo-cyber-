const { reply, fmtTime, startedAt } = require('../lib/helpers');
module.exports = {
  name: 'uptime', alias: [], category: 'GENERAL',
  async run({ sock, msg }) {
    await reply(sock, msg, fmtTime(Date.now() - startedAt));
  },
};
