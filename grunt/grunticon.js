module.exports = {
  icons: {
    files: [{
      expand: true,
      cwd: '<%= config.folders.svgMin %>',
      src: ['*.svg', '*.png'],
      dest: '<%= config.folders.css %>'
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
        'home-white': ['.navbar-link.home, .navbar-link.home.starter_active:hover, .off-canvas-list-item.menu-item-home a, .off-canvas-list-item.menu-item-home a:hover'],
        'home-primary': ['.navbar-link.home:hover', '.footer-nav-link.home:hover', '.footer-nav-link.starter_active.home:hover'],
        'home-font': ['.footer-nav-link.home'],
        'close-secondary': ['.in .off-canvas-toggle'],
      }
    }
  }
}
