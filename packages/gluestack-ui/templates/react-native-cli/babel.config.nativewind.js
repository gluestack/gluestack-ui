module.exports = {
  presets: ['module:metro-react-native-babel-preset', 'nativewind/babel'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@': './',
          'tailwind.config': './tailwind.config.js',
        },
      },
    ],
    "react-native-worklets/plugin",
  ],
};
