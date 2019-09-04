const baseConfig = require('./jest.config');

module.exports = {
  ...baseConfig,
  testMatch: ['<rootDir>/**/test.storyshots.(js|jsx|ts|tsx)'],
};
