module.exports = function (grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    clean: {
      dist: {
        src: ['dist']
      }
    },

    uglify: {
      dist: {
        src: 'app/js/main.js',
        dest: 'dist/js/main.min.js'
      }
    },

    concat: {
      dist: {
        src: ['bower_components/d3/d3.min.js', 'dist/js/main.min.js'],
        dest: 'dist/js/main.min.js',
      },
    },

    cssmin: {
      dist: {
        src: 'app/css/*',
        dest: 'dist/css/style.min.css'
      }
    },

    copy: {
      dist: {
        files: [
          { expand: true, flatten: true, src: ['app/index.html'], dest: 'dist', filter: 'isFile' },
          { expand: true, flatten: true, src: ['app/data/*'], dest: 'dist/data', filter: 'isFile' },
          { expand: true, flatten: true, src: ['app/img/*'], dest: 'dist/img', filter: 'isFile' }
        ]
      }
    },

    useminPrepare: {
      html: 'app/index.html'
    },

    usemin: {
      html: 'dist/index.html'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-usemin');

  grunt.registerTask('dist', ['clean:dist', 'useminPrepare', 'cssmin:dist', 'uglify:dist', 'concat:dist', 'copy:dist', 'usemin']);
};
