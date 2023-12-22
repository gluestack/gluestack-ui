const path = require('path');
const importChangePlugin = require('./babelplugin.js');
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [importChangePlugin],
  };
};
