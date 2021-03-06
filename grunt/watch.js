module.exports = {
  options: {
    livereload: true,
    spawn: false
  },
  jsHint: {
    files: ['<%= config.folders.jsSrc %>script.js', 'grunt/*.js', 'Gruntfile.js'],
    tasks: ['jshint']
  },
  scripts: {
    files: ['<%= config.folders.jsSrc %>**/*.js'],
    tasks: ['concat', 'uglify']
  },
  styles: {
    files: ['<%= config.folders.scss %>**/*.scss'],
    tasks: ['sass:main', 'autoprefixer:main', 'cssmin', 'kss', 'sassdoc']
  },
  grunticon: {
    files: ['<%= config.folders.svg %>*.svg'],
    tasks: ['clean:svgmin', 'svgmin', 'grunticon']
  },
  kss: {
    files: ['<%= config.folders.scss %>styleguide.md'],
    tasks: ['kss']
  }
}
