// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {

  // Automatically clear mock calls and instances between everry test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'reports/coverage',

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: [
    'text',
    'lcov',
  ],

  // A set of global variables that need to be available in all test environments
  globals: {
    VERSION: 'global_version',
    API_PORT: '',
    API_ROOT: '',
  },

  // An array of directory names to be searched recursively up from the requiring module's location
  moduleDirectories: [
    'app',
    'node_modules',
  ],

  // A map from regular expressions to module names that allow to stub out resources with a single module
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/app/__mocks__/styleMock.js',
    '\\.(png|jpg|gif|ttf|eot|svg)$': '<rootDir>/app/__mocks__/fileMock.js',
  },

  // Use this configuration option to add custom reporters to Jest
  reporters: [
    'default',
    'jest-junit',
  ],

  // The paths to modules that run some code to configure or set up the testing environment before each test
  setupFiles: [
    '<rootDir>/jest.init.js',
  ],

  // The path to a module that runs some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ['jest-enzyme'],

  // The test environment that will be used for testing
  testEnvironment: 'enzyme',

  // Options that will be passed to the testEnvironment
  testEnvironmentOptions: {
    'enzymeAdapter': 'react16',
  },

  // Indicates whether each individual test should be reported during the run
  verbose: true,
}