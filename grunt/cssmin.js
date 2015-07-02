module.exports = {
  minify: {
    files: {
      '<%= config.folders.css %>style.min.css': ['<%= autoprefixer.main.dest %>']
    }
  }
}
