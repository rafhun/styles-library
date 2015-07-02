module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: '<%= config.folders.svg %>',
      src: ['*.svg'],
      dest: '<%= config.folders.svgMin %>'
    }]
  }
}
