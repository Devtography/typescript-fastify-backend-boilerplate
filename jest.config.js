const { pathsToModuleNameMapper } = require('ts-jest/utils')
const { compilerOptions } = require('./tsconfig.json')

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = config = {
  testEnvironment: 'node',
  globals: {
    'ts-test': {
      tsconfig: 'tsconfig.json'
    }
  },
  moduleFileExtensions: ['ts', 'js', 'json'],
  moduleNameMapper: pathsToModuleNameMapper(
    compilerOptions.paths,
    { prefix: '<rootDir>/' }
  ),
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  testMatch: [
    '**/tests/**/*.test.(ts|js)'
  ],
  verbose: true,
};
