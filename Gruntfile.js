module.exports = function(grunt) {

  grunt.initConfig({
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'img',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: 'img'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'icons',
          src: '{,*/}*.svg',
          dest: 'icons'
        }]
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-svgmin');

  // Default task.
  grunt.registerTask('default', ['imagemin', 'svgmin']);

};
