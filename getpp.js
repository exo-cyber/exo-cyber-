const { reply, getTarget } = require('../lib/helpers');
module.exports = {
  name: 'getpp', alias: [], category: 'PROFILE',
  async run({ sock, msg, jid }) {
    try {
      const url = await sock.profilePictureUrl(getTarget(sock, msg), 'image');
      await sock.sendMessage(jid, { image: { url } }, { quoted: msg });
    } catch {
      await reply(sock, msg, 'No profile picture (or it is private).');
    }
  },
};
