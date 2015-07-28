module.exports = {
  options: {
    jshintrc: true,
  },
  grunt: ['Gruntfile.js', 'grunt/*.js'],
  src: [
    '<%= config.folders.jsMolecules %>**',
    '<%= config.folders.jsSrc %>script.js'
    ]
}
