const myBabel = require('../../packages/babel-plugin-styled-resolver/src/index.js');
const path = require('path');

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        myBabel,
        {
          configPath: path.join(__dirname, './gluestack-ui.config.ts'),
          configThemePath: ['theme'],
          // styled: [
          //   // '@gluestack-style/react',
          //   // path.resolve(__dirname, './gluestack-ui-components/core/styled'),
          // ],
          // components: ['@gluesatck-ui/themed'],
        },
      ],
    ],
  };
};
