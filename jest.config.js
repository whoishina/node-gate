module.exports = {
    transform: {
      '.(ts|tsx)': 'ts-jest'
    },
    testEnvironment: 'node',
    testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
    moduleFileExtensions: [
      'ts',
      'tsx',
      'js'
    ],
    "coverageReporters": ["json-summary", "json", "lcov", "text", "clover"],
    coveragePathIgnorePatterns: [
      '/node_modules/',
      '/tests/',
    ],
    // coverageThreshold: {
    //   'global': {
    //     'branches': 90,
    //     'functions': 95,
    //     'lines': 95,
    //     'statements': 95
    //   }
    // },
    collectCoverageFrom: [
      'src/*.test.{js,ts}'
    ],
    modulePathIgnorePatterns : ["electron"]
  }