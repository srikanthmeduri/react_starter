module.exports = {
  entry: "./app/App.js",
  output: {
    filename: "dist/bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'jsx-loader'}
    ]
  }
};