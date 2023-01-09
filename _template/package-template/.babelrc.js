module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [process.env.NODE_ENV == 'production' ? 'transform-remove-console' : ''],
    ],
  };
};
