module.exports = function (api) {
  api.cache(true);
  return {
    presets: [['babel-preset-expo']],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            // Patterns and components are read straight from the repo's src/,
            // the single source of truth; nothing is copied into this app.
            '@/components/ui': '../../src/components/ui',
            '@/patterns': '../../src/patterns',
            '@': './',
          },
        },
      ],
      'react-native-worklets/plugin',
    ],
  };
};
