exports.task = {
  options: {
    separator: '\n'
  },
  build: {
    options: {
      banner: '<%= banner.expanded %>'
    },
    src: '<%= path.source %>/<%= path.scripts %>/*.js', 
    dest: '<%= path.build %>/<%= path.scripts %>/app.js'
  }
};