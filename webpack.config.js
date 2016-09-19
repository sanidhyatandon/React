
module.exports = {
  entry: './src/main.js',
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: '.',
    port: 8888
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        loader: 'babel'
      }
    ]
  }
}
