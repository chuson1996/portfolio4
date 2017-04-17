/* global process */
// Karma configuration

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],

    // list of files / patterns to load in the browser
    files: [
      'tests.webpack.js'
    ],

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors:
    // https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'tests.webpack.js': ['webpack']
    },

    webpack: {
      module: {
        loaders: [
          {
            exclude: [
              /\.html$/,
              /\.(js|jsx)$/,
              /\.css$/,
              /\.json$/,
              /\.svg$/
            ],
            loader: 'url',
            query: {
              limit: 10000,
              name: 'static/media/[name].[hash:8].[ext]'
            }
          },
          {
            test: /\.(js|jsx)$/,
            include: require('./config/paths.js').appSrc,
            loaders: [
              'babel?presets[]=react-app&cacheDirectory=true'
            ]
          },
          {
            test: /\.css$/,
            loader: 'style!css?importLoaders=1!postcss'
          },
          {
            test: /\.json$/,
            loader: 'json'
          },
          // "file" loader for svg
          {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file',
            query: {
              name: 'static/media/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      resolve: {
        extensions: ['.js', '.json', '.jsx', ''],
        modulesDirectories: [
          'src',
          'node_modules'
        ]
      }
    },

    // webpack: require('./config/webpack.config.prod.js'),

    globals: {
      NODE_ENV: 'production'
    },

    webpackMiddleware: {
      noInfo: true
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR ||
    // config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file
    // changes
    autoWatch: true,

    // start these browsers
    // available browser launchers:
    // https://npmjs.org/browse/keyword/karma-launcher
    // browsers: process.env.CONTINUOUS_INTEGRATION === 'true' ?
    //   ['Firefox'] : ['Chrome'],
    browsers: ['Chrome'],

    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,
  });
};