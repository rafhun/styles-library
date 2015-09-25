module.exports = {
  options: {
    css: ['css/style.css', 'css/icons.data.svg.css'],
    js: 'js/script.js',
    // npm: 2 // uncomment if you are using npm v2.*
    // template: 'node_modules/kss/generator/handlebars/template/'
  },
  styleguide: {
    files: {
      '<%= config.folders.root %>' : ['<%= config.folders.scss %>']
    }
  }
}
