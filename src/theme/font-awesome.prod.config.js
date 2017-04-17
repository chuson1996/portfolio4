var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  styleLoader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader'),
  styles: {
    "mixins": false,
    "core": false,
    "icons": false,
    "larger": false,
    "path": false
  }
};