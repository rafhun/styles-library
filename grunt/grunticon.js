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
      'colors': {
        primary: '#d78714',
        secondary: '#73695a',
        lines: '#4d4d4d',
        font: '#6f6f6f'
      },
      'customselectors': {
        'home-white': ['.navbar-link.home, .navbar-link.home.starter_active:hover, .off-canvas-link.home, .off-canvas-link.home:hover'],
        'home-primary': ['.navbar-link.home:hover', '.footer-nav-link.home:hover', '.footer-nav-link.starter_active.home:hover'],
        'home-font': ['.footer-nav-link.home'],
        'close-secondary': ['.in .off-canvas-toggle'],
      }
    }
  }
}
