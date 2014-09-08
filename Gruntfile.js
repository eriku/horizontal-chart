module.exports = function(grunt) {
  //
  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      build: {
        src: [
          'src/js/jquery.1.6.2.min.js',
          'src/js/horizBarChart.js'
        ],
        dest: 'build/js/application.js'
      },
    },
    uglify: {
        build: {
          files: [
           { 'build/js/application.min.js': ['<%= concat.build.dest %>'] }
          ]
        },
    },
    compress: {
      main: {
        options: {
          mode: 'gzip'
        },
        expand: true,
        src: ['build/js/*.js']
      }
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
        files: ['Gruntfile.js', '<%= concat.build.src %>', '<%= concat.buildFoot.src %>'],
        tasks: ['default']
      }
    }
  });

  grunt.registerTask('default', ['concat', 'uglify', 'compress']);

};
