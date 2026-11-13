const { reply, getMedia } = require('../lib/helpers');
const { BOT_NAME } = require('../config');
module.exports = {
  name: 's', alias: ['sticker'], category: 'STICKER TOOLS',
  async run({ sock, msg, jid }) {
    const { Sticker, StickerTypes } = require('wa-sticker-formatter');
    const media = await getMedia(msg);
    if (!media) return reply(sock, msg, 'Send or reply to an image/video.');
    const sticker = new Sticker(media.buffer, { pack: BOT_NAME, author: 'EXO', type: StickerTypes.FULL, quality: 60 });
    await sock.sendMessage(jid, await sticker.toMessage(), { quoted: msg });
  },
};
