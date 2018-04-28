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
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  }
};
