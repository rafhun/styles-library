module.exports = {
  build: {
    src: '<%= concat.dist.dest %>',
    dest: '<%= config.folders.js %>script.min.js'
  }
}
