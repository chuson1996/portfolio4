// var wallabyWebpack = require('wallaby-webpack');
// var paths = require('./config/paths');
// var wallabyPostprocessor = wallabyWebpack({
//     // webpack options, such as
//     module: {
//       loaders: [
//         {
//           test: /\.(js|jsx)$/,
//           include: paths.appSrc,
//           loaders: [
//             'babel?presets[]=react-app'
//           ]
//         },
//       ]
//     },
//   }
// );

module.exports = function(wallaby) {
  return {
    files: [
      'src/**/*.js',
      'package.json'
    ],

    tests: [
      {pattern: 'test/**/*.test.js'}
    ],

    env: {
      type: 'node',
      runner: 'node'
    },

    compilers: {
      "**/*.js": wallaby.compilers.babel()
    },

    testFramework: 'jest'
  };
}