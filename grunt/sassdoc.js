module.exports = {
  default: {
    src: '<%= config.folders.scss %>',
    options: {
      dest: '<%= config.folders.documentation %>',
      groups: {
        'undefined': 'Basic'
      },
      basePath: 'https://github.com/rafhun/styles-library/tree/master',
      descriptionPath: '<%= config.folders.scss %>readme.md'
    }
  }
}
