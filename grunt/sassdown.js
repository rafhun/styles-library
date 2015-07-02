module.exports = {
  styleguide: {
    options: {
      assets: [
        'css/style.min.css',
        'js/script.min.js'
      ],
      excludeMissing: true,
      readme: 'readme.md'
    },
    files: [{
      expand: true,
      cwd: 'scss',
      src: '**/*.scss',
      dest: 'wwwroot/'
    }]
  }
}
