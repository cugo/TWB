//"wrapper" function, which encapsulates your Grunt configuration.
module.exports = function(grunt){
	//to initialize our configuration object
	grunt.initConfig({
		//to read projects settings.
		pkg: grunt.file.readJSON('package.json'),
		concat: { //helps concat files into one.
			options: {
				separator: "\n\n" // separator between js files.
			},
			dist: {
				// the files to concatenate
				src: ['src/resources/js/TableController.js','src/resources/js/TreeController.js'],
				// the location of the resulting JS file
				dest: 'bin/<%= pkg.name %>.js' // the name from package.json name.
			}
		},
		uglify: {
			options: {
				mangle: false
			},
			my_target: {
				files: {
					//where minified files go
					'bin/js/<%= pkg.name %>.min.js' : ['bin/<%= pkg.name %>.js']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	//Tasks
	grunt.registerTask('default', ['concat']); // runs from cmd. just type grunt.
	grunt.registerTask('conugly', ['concat', 'uglify']); // grunt conugly
}; 