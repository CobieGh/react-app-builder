module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'public/app.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: [
          'react',
          'es2015'
        ]
      }
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass']
    }]
  }
};
