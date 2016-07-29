module.exports = {
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
};
