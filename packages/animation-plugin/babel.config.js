module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            // For development, we want to alias the library to the source
            ['@dank-style/react']: path.join(__dirname, '../react/src/index'),
          },
        },
      ],
      process.env.NODE_ENV !== 'production' ? [] : ['transform-remove-console'],
    ],
  };
};
