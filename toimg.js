const { reply, getMedia } = require('../lib/helpers');
module.exports = {
  name: 'toimg', alias: [], category: 'STICKER TOOLS',
  async run({ sock, msg, jid }) {
    const sharp = require('sharp');
    const media = await getMedia(msg, ['stickerMessage']);
    if (!media) return reply(sock, msg, 'Reply to a sticker.');
    const png = await sharp(media.buffer).png().toBuffer(); // static stickers only
    await sock.sendMessage(jid, { image: png }, { quoted: msg });
  },
};
