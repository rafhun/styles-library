module.exports = {
  dev: {
    bsFiles: {
      src: '<%= config.folders.css %>*.css'
    },
    options: {
      watchTask: true,
      proxy: '<%= config.url %>'
    }
  }
}
