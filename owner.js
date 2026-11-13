const { reply } = require('../lib/helpers');
const { OWNER } = require('../config');
module.exports = {
  name: 'owner', alias: [], category: 'GENERAL',
  async run({ sock, msg }) {
    await reply(sock, msg, `Owner: wa.me/${OWNER}`);
  },
};
