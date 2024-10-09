module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-typescript',
  ],
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          src: './src',
        },
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
      },
    ],
    [
      'content-transformer',
      {
        transformers: [
          {
            file: /\.yml$/,
            format: 'yml',
          },
        ],
      },
    ],
    ['@babel/plugin-proposal-decorators', { version: 'legacy' }],
    'babel-plugin-parameter-decorator',
    'babel-plugin-transform-typescript-metadata',
  ],
};
