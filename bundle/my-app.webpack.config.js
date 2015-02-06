var path = require('path');

module.exports = {
  context: __dirname,
  entry: './assets/javascripts/my-app.jsx',
  output: {
    filename: 'my-app.bundle.js',
    path: '../public/'
  },
  resolve: {
    root: [path.join(__dirname, "assets/javascripts")],
    extensions: ["", ".js", ".jsx"]
  },
  module: {
    loaders: [
  { test: /\.jsx$/, loader: 'jsx-loader' },
  { test: /\.css$/, loader: "style-loader!css-loader" },
  { test: /\.scss$/, loader: "style!css!sass?outputStyle=expanded" },
  { test: /\.otf$/, loader: "url-loader?mimetype=font/opentype" },
  { test: /\.png$/, loader: "url-loader?mimetype=image/png" }
  ]

}}
