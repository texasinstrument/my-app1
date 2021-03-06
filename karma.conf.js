// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',

    files: [
        "./node_modules/jquery/dist/jquery.min.js",
        "./node_modules/foundation-sites/dist/js/foundation.js",
        {
          pattern: "dist/assets/mocks/**/*.json",
          served: true,
          included: false,
          watched: true,
          noCache: false
        },
        {
          pattern: "dist/assets/worker/worker.js",
          served: true,
          included: false,
          watched: true,
          noCache: false
        }
    ],
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-phantomjs-launcher'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular/cli/plugins/karma')
    ],
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    angularCli: {
      environment: 'dev'
    },
    mime: {
      'text/x-typescript': ['ts','tsx']
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true
  });
};
