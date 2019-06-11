module.exports = function (wallaby) {
  return {
    compilers: {
      '**/*.js': wallaby.compilers.babel(),
    },

    debug: true,

    env: {
      runner: 'node',
      type: 'node',
    },

    files: [{
      ignore: true,
      load: false,
      pattern: 'app/**/*.test.js',
    }, {
      ignore: false,
      load: true,
      pattern: 'jest.config.js',
    }, {
      ignore: false,
      load: true,
      pattern: 'app/**/*.js',
    }],

    testFramework: 'jest',

    tests: [{
      ignore: false,
      load: true,
      pattern: 'app/**/*.test.js',
    }],

    setup: function (wallaby) {
      var jestConfig = require('./jest.config.js')

      Object.keys(jestConfig.moduleNameMapper).forEach(k => (
        jestConfig.moduleNameMapper[k] = jestConfig.moduleNameMapper[k].replace('<rootDir>', wallaby.localProjectDir)
      ))
      Object.keys(jestConfig.setupFiles).forEach(k => (
        jestConfig.setupFiles[k] = jestConfig.setupFiles[k].replace('<rootDir>', wallaby.localProjectDir)
      ))
      wallaby.testFramework.configure(jestConfig)
    },
  }
}