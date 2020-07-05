module.exports = {
  roots: ['<rootDir>/__tests__'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1',
    '@test/(.*)': '<rootDir>/src/$1',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
