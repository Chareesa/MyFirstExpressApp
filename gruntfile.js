module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jscs');

  grunt.initConfig({
    jshint: {
      all: ["./*.js"]
    },

    jscs: {
      all: {
        options: {
          'standard': 'airbnb'
        },
        files: {
          src: []
        }
      }
    },
  });
  grunt.registerTask('test', ['jshint', 'jscs']);
  grunt.registerTask('default', ['test']);
};
