const { reply, getMedia } = require('../lib/helpers');
const { BOT_NAME } = require('../config');
module.exports = {
  name: 'take', alias: [], category: 'STICKER TOOLS',
  async run({ sock, msg, jid, text }) {
    const { Sticker } = require('wa-sticker-formatter');
    const media = await getMedia(msg, ['stickerMessage']);
    if (!media) return reply(sock, msg, 'Reply to a sticker. Usage: .take pack|author');
    const [pack, author] = text.split('|').map((x) => x.trim());
    const sticker = new Sticker(media.buffer, { pack: pack || BOT_NAME, author: author || 'EXO' });
    await sock.sendMessage(jid, await sticker.toMessage(), { quoted: msg });
  },
};
