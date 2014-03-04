"use strict"

module.exports = function (grunt) {
  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 9000,
          base: './',
          livereload: true,
          open: true
        }
      }
    },

    open: {
      dev: {
        path: 'http://127.0.0.1:9000',
        app: 'Google Chrome'
      },
      file: {
        path: './'
      }
    },

    watch : {
      options: {
        livereload: true
      },
      static: {
        files: ['./*.html', './css/*.css'],
        options: {
          livereload: true
        }
      }
    },
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-open');


  // Tasks
  grunt.registerTask('default', ['connect', 'watch', 'open']);
};
