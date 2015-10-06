module.exports = {
  dev: {
    bsFiles: {
      src: ['<%= config.folders.css %>*.css', '<%= config.folders.documentation %>**/*.*']
    },
    options: {
      watchTask: true,
      proxy: '<%= config.url %>'
    }
  }
}
