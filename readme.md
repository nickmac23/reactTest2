npm init
$ npm install --save react react-dom babel-preset-react babel-loader babel-core

echo '{ "presets": ["react"] }' >> .babelrc

touch webpack.config.js
<!-- module.exports = {
  module: {
  loaders: [
    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
  ]
},

  context: __dirname + "/app",
  entry: "./main.js",
  output: {
      path: __dirname + "/dist",
      filename: "bundle.js"

  }
}; -->

$webpack --watch
