const { reply, requireAdmin } = require('../lib/helpers');
module.exports = {
  name: 'kick', alias: [], category: 'GROUP',
  async run({ sock, msg, jid }) {
    if (!(await requireAdmin(sock, msg))) return;
    const ctx = msg.message?.extendedTextMessage?.contextInfo;
    const target = ctx?.mentionedJid?.[0] || ctx?.participant;
    if (!target) return reply(sock, msg, 'Mention or reply to someone.');
    await sock.groupParticipantsUpdate(jid, [target], 'remove');
  },
};
