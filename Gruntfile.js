module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
	  dist: {
	    files: {
	      'public/js/app.js': ['src/**/*.js']
	    }
	  }
	},
	nodemon: {
      dist: {
        script: 'server.js'
      }
    },
    less: {
    	dist: {
		    files: {
		      "public/css/main.css": ["node_modules/bootstrap/dist/css/bootstrap.css", "src/less/**/*.less"]
		    }
	    },
    }
  });

  require('load-grunt-tasks')(grunt);

  // Default task(s).
  grunt.registerTask('default', ['browserify', 'less:dist', 'nodemon:dist']);

};