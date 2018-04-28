const path = require('path');

module.exports = {
  resolve: {
    extensions: [ '.js', '.jsx', '.json', '.ts', '.tsx', '.d.ts' ],
    modules: [
      path.resolve('./src/renderer'),
      'node_modules',
    ],
  },
  module: {
    rules: [{
      test: /\.scss/,
      use: [{
        loader: "css-loader",
        options: {
          localIdentName: '[path][name]__[local]--[hash:base64:5]',
        }
      }, {
        loader: "sass-loader"
      }],
      fallback: "style-loader"
    }]
  }
};
