const { reply } = require('../lib/helpers');
module.exports = {
  name: 'play', alias: [], category: 'MEDIA',
  async run({ sock, msg, text }) {
    if (!text) return reply(sock, msg, 'Usage: .play <song name>');
    const yts = require('yt-search');
    const v = (await yts(text)).videos[0];
    if (!v) return reply(sock, msg, 'Nothing found.');
    // TODO: add your audio downloader here, then send with
    // sock.sendMessage(jid, { audio: buffer, mimetype: 'audio/mpeg' })
    await reply(sock, msg, `${v.title}\n${v.timestamp}\n${v.url}`);
  },
};
