module.exports = {
  options: {
    css: ['css/style.css', 'css/icons.data.svg.css'],
    js: 'js/script.js',
    template: 'node_modules/grunt-kss/node_modules/kss/generator/handlebars/template/'
  },
  styleguide: {
    files: {
      '<%= config.folders.root %>' : ['<%= config.folders.scss %>']
    }
  }
}
