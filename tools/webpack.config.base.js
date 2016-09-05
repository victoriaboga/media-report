var packageJSON = require('../package.json');
var name = packageJSON["name"];

module.exports = {
  entry: {
    js:"./src/"+name+".js",
    css:"./src/"+name+".css"
  },
  output: {
    path: "./dist",
    filename: name+".bundle.js"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(bower_components|node_modules)/,
      loader: 'babel',
    }],
  },
  resolve: {
    extensions: [
      '',
      '.js',
    ],
  },
};
