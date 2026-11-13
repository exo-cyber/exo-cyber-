const { requireAdmin } = require('../lib/helpers');
module.exports = {
  name: 'tagall', alias: [], category: 'GROUP',
  async run({ sock, msg, jid, text }) {
    const meta = await requireAdmin(sock, msg);
    if (!meta) return;
    const ids = meta.participants.map((p) => p.id);
    const list = ids.map((id) => `◈ @${id.split('@')[0]}`).join('\n');
    await sock.sendMessage(jid, { text: `${text || 'Attention'}\n${list}`, mentions: ids });
  },
};
