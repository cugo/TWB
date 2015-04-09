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
		deps: { //dependencies
			src: [
				'bower_components/modernizr/modernizr.js',
				'bower_components/bootstrap/dist/js/bootstrap.js',
				'bower_components/jquery/dist/jquery.js',
				'bower_components/angularjs/angularjs.min.js',
			],
			dest: 'src/resources/js/<%= pkg.name %>-deps.js'
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
	//npm tasks
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	//Tasks
	grunt.registerTask('default', 'Default Task Alias'['concat']); // runs from cmd. just type grunt.
	grunt.registerTask('conugly', ['concat', 'uglify']); // grunt conugly
}; 