var RewirePlugin = require("rewire-webpack");

module.exports = {
  entry: './test.js',
  output: {
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel' }
    ]
  },
  plugins: [
      new RewirePlugin()
  ]
};
