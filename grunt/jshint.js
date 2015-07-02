module.exports = {
  options: {
    jshintrc: true,
  },
  grunt: ['Gruntfile.js', 'grunt/*.js'],
  src: [
    '<%= config.folders.jsComp %>**',
    '<%= config.folders.jsSrc %>script.js'
    ]
}
