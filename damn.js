const revealViewOnce = require('../lib/viewonce');
module.exports = {
  name: 'damn', alias: [], category: 'MEDIA',
  // reply to a view-once message: resends it in the same chat
  async run({ sock, msg }) { await revealViewOnce(sock, msg, false); },
};
