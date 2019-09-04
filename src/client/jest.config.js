module.exports = {
  name: 'client',
  displayName: 'client',
  verbose: true,
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/.jest/transform.js',
  },
  testMatch: ['<rootDir>/**/?(*.)(spec|test).(ts|js)?(x)'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/.jest/__mocks__/file.js',
    '\\.(styl|css|less|scss)$': '<rootDir>/.jest/__mocks__/style.js',
  },
  setupFiles: ['<rootDir>/.jest/setup.js'],
};
