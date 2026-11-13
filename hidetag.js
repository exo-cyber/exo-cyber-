const { requireAdmin } = require('../lib/helpers');
module.exports = {
  name: 'hidetag', alias: [], category: 'GROUP',
  async run({ sock, msg, jid, text }) {
    const meta = await requireAdmin(sock, msg);
    if (!meta) return;
    await sock.sendMessage(jid, { text: text || '.', mentions: meta.participants.map((p) => p.id) });
  },
};
