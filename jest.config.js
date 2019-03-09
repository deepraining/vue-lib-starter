module.exports = {
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node', 'vue'],
  moduleNameMapper: {
    '^vue$': 'vue/dist/vue.common.js',
  },
  transform: {
    '.*\\.js$': 'babel-jest',
    '.*\\.vue$': 'vue-jest',
  },
};
