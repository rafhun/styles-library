module.exports = {
  dist: {
    src: [
      '<%= bower_concat.all.dest %>',
      '<%= config.folders.jsSrc %>plugins.js',
      '<%= config.folders.jsComp %>**/*.js',
      '<%= config.folders.jsSrc %>script.js'
    ],
    dest: '<%= config.folders.js %>script.js'
  }
}
