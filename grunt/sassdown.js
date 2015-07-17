module.exports = {
  styleguide: {
    options: {
      assets: [
        'wwwroot/css/style.min.css',
        'wwwroot/css/icons.data.svg.css',
        'wwwroot/js/script.min.js'
      ],
      excludeMissing: true,
      readme: 'readme.md',
      theme: 'sassdown/theme.css'
    },
    files: [{
      expand: true,
      cwd: 'scss',
      src: '**/*.scss',
      dest: 'wwwroot/'
    }]
  }
}
