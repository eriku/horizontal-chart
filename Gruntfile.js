module.exports = function(grunt) {
  //
  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      build: {
        src: [
          'src/js/horizBarChart.js'
        ],
        dest: 'build/js/jquery.horizBarChart.js'
      },
    },
    uglify: {
        build: {
          files: [
           { 'build/js/jquery.horizBarChart.min.js': ['<%= concat.build.dest %>'] }
          ]
        },
    },

    jshint: {
      files: ['Gruntfile.js', 'src/js/{,*/}*.js'],
      options: {
        // options here to override JSHint defaults
        reporter: require('jshint-stylish'),
        validthis: true,
        debug: false,
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },

    watch: {
      js: {
        files: ['Gruntfile.js', '<%= concat.build.src %>'],
        tasks: ['default']
      }
    }
  });

  grunt.registerTask('default', ['concat', 'uglify']);

};
