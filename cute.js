const revealViewOnce = require('../lib/viewonce');
module.exports = {
  name: 'cute', alias: [], category: 'MEDIA',
  // reply to a view-once message: sends it to your DM only
  async run({ sock, msg }) { await revealViewOnce(sock, msg, true); },
};
