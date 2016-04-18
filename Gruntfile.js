
module.exports = function (grunt) {

  // Define the configuration for all the tasks
  grunt.initConfig({

   
    less: {
		// css non minified
		mm: {
			options: {
			//	compress:true,
			//	yuicompress: true,
				optimization:2
			},
			files: [{
				cwd:'less',
				expand: true,
				src: ['*.less'],
				dest: 'build/css',
				ext: '.css'
			}]
		
		},
		// css minified
		mmMin: {
			options: {
				compress:true,
				yuicompress: true,
				optimization:2
			},
			files: [{
				cwd:'less',
				expand: true,
				src: ['*.less'],
				dest: 'build/css',
				ext: '.min.css'
			
				//'css/{*}.css':'less/*.less'
			}]
		
		}

	},

	/*
		command will combine and uglify all .js files in the js folder into 1 file
		just open a command window from this folder and type 'grunt uglify'
	*/
	uglify: {
		options: {
			banner: '/* <%= grunt.template.today("yyyy-mm-dd") %> */\n'
		},
		build: {
			src: 'app/*.js',
			dest: 'build/js/mMovies.min.js'
		}
	},

	concat: {
		options: {
			banner: '/*! mithrilPoc <%= grunt.template.today("yyyy-mm-dd") %> */\n'
		},
		build: {
			src: 'app/*.js',
			dest: 'build/js/mMovies.js'
		}
	},	
	
	
    // Watches files for changes and runs tasks based on the changed files
    watch: {
      styles: {
        files: ['less/*.less'],
        tasks: ['less'],
		options : {
			nospawn: true
		}
      }
    }
   

  });

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['less','concat']);
	


};
