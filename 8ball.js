const { reply, pick } = require('../lib/helpers');
module.exports = {
  name: '8ball', alias: [], category: 'FUN',
  async run({ sock, msg }) {
    await reply(sock, msg, pick(['Yes.', 'No.', 'Maybe.', 'Ask again later.', 'Definitely.', 'Not a chance.']));
  },
};
