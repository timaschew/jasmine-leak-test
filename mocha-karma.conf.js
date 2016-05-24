module.exports = function (config) {
  config.set({
    frameworks: ['mocha'],
    files: [
      './node_modules/chai/chai.js',
      './test/mocha.js'
    ],
    browsers: ['Chrome'],
    port: 9292
  })
}
