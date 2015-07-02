module.exports = {
  icons: {
    files: [{
      expand: true,
      cwd: '<%= config.folders.svgMin %>',
      src: ['*.svg', '*.png'],
      dest: '<%= config.folders.icons %>'
    }],
    options: {
      'compressPNG': true,
      'dynamicColorOnly': true,
      'colors': {
        primary: '#000',
      },
      'customselectors': {
        'home-primary': ['.icon-home:hover'],
      }
    }
  }
}
