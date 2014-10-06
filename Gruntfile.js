module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          'app/static/css/base.css': 'dev/scss/base.scss',
          'app/static/css/tablet.css': 'dev/scss/tablet.scss',
          'app/static/css/mobile.css': 'dev/scss/mobile.scss',
        }
      }
    },
    cssmin: {
      combine: {
        files: {
          'app/static/css/style.css': ['/node_modules/normalize.css/normalize.css'],
          'app/static/css/tablet.min.css': 'app/static/css/tablet.css',
          'app/static/css/mobile.min.css': 'app/static/css/mobile.css'
        }
      }
    },
    uglify: {
      js: {
        files: {
          'app/static/js/main.min.js': [
            'app/static/js/main.js',
          ]
        }
      }
    },

    watch: {
      css: {
        files: ['**/*.scss'],
        tasks: ['sass', 'cssmin']
      },
      js: {
        files: 'app/static/js/main.js',
        tasks: ['uglify']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['watch']);
};