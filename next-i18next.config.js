const path = require('path');

module.exports = {
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
  },
  localePath: path.resolve('./public/locales')
};
