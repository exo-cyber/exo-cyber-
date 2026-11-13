const { reply, fmtTime, startedAt } = require('../lib/helpers');
module.exports = {
  name: 'status', alias: [], category: 'GENERAL',
  async run({ sock, msg }) {
    await reply(sock, msg, `Status: Online\nUptime: ${fmtTime(Date.now() - startedAt)}`);
  },
};
