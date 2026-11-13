const { reply } = require('../lib/helpers');
module.exports = {
  name: 'clear', alias: [], category: 'AI SYSTEM',
  async run({ sock, msg, jid }) {
    // TODO: clear your stored AI conversation history for this jid here
    await reply(sock, msg, 'AI memory cleared.');
  },
};
