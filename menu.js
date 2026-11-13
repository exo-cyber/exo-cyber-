const { reply } = require('../lib/helpers');
const { PREFIX, BOT_NAME } = require('../config');

const ORDER = ['GENERAL', 'AI SYSTEM', 'STICKER TOOLS', 'MEDIA', 'PROFILE', 'GROUP', 'FUN'];

module.exports = {
  name: 'menu',
  alias: ['help'],
  category: 'GENERAL',
  async run({ sock, msg }) {
    const { getPlugins } = require('../loader');
    const groups = {};
    for (const p of getPlugins()) (groups[p.category] ||= []).push(p.name);

    const cats = [...ORDER.filter((c) => groups[c]), ...Object.keys(groups).filter((c) => !ORDER.includes(c))];
    let out = `╭━━━「 ${BOT_NAME} 」\n┃\n┃ Status: Online\n┃ Personality: Nonchalant.\n┃\n`;
    for (const c of cats) {
      out += `┣━━━「 ${c} 」\n`;
      for (const n of groups[c]) out += `┃ ◈ ${PREFIX}${n}${n === 'ai' ? ' on/off' : ''}\n`;
      out += '┃\n';
    }
    await reply(sock, msg, out + '╰━━━━━━━━━━━━');
  },
};
