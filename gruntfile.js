module.exports = function(grunt){

// Configuration
grunt.initConfig({
  sass: {
    dist:{
      files: [{
        src:'css/scss/styles.scss',
        dest: 'css/styles.css'
      }]
    }
  }
});


// load Plugins
grunt.loadNpmTasks('grunt-sass');

// Register Tasks

grunt.registerTask('')




};
