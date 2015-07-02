module.exports = {
  options: {
    browsers: ['last 2 versions']
  },
  main: {
    src: '<%= sass.main.dest %>',
    dest: '<%= config.folders.css %>style.css'
  }
}
