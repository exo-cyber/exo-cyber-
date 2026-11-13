const { reply, aiChats } = require('../lib/helpers');
const { PREFIX } = require('../config');
module.exports = {
  name: 'ai', alias: [], category: 'AI SYSTEM',
  async run({ sock, msg, jid, args }) {
    const mode = (args[0] || '').toLowerCase();
    if (mode === 'on') { aiChats.add(jid); return reply(sock, msg, 'AI is on for this chat.'); }
    if (mode === 'off') { aiChats.delete(jid); return reply(sock, msg, 'AI is off for this chat.'); }
    return reply(sock, msg, `Use ${PREFIX}ai on or ${PREFIX}ai off`);
  },
};
