module.exports = {
  images: {
    files: [{
      expand: true,
      cwd: '<%=config.folders.imageSrc %>',
      src: ['**/*.{png,jpg,gif}'],
      dest: '<%= config.folders.images %>'
    }]
  }
}
