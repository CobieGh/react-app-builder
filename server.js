var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  contentBase: './public'
}).listen(3000, 'localhost', function (error) {
  if (error) {
    return console.log(error);
  }

  console.log('Listening at http://localhost:3000/');
});
