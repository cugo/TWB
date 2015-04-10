//"wrapper" function, which encapsulates your Grunt configuration.
module.exports = function (grunt)
{
	//to initialize our configuration object
	grunt.initConfig({
		//to read projects settings.
		pkg: grunt.file.readJSON('package.json'),
		concat: {//helps concat files into one.
			options: {
				separator: "\n\n"// separator between js files.
			},
			dist: {
				// the files to concatenate
				src: ['src/resources/js/**/*.js'],
				// the location of the resulting JS file
				dest: 'src/<%= pkg.name %>.js'
			},
			deps: {//dependencies
				src: [
					'bower_components/modernizr/modernizr.js',
					'bower_components/jquery/dist/jquery.js',
					'bower_components/bootstrap/dist/js/bootstrap.js',
					'bower_components/angularjs/angular.min.js',
				],
				dest: 'src/<%= pkg.name %>-deps.js'
			},
			css: {//adds bootstrap and create TWB.css with it
				src: ['bower_components/bootstrap/dist/css/bootstrap.min.css',
						'src/resources/css/table.css'
				],
				dest: 'src/resources/css/<%= pkg.name %>.css'
			},
			move: {
				src: ['bower_components/angularjs/angular.min.js.map'],
				dest: 'src/angular.min.js.map'
			}
		},
		/*
		sass: {
			dev: {
				files: {
					'src/resources/css/styles.css': 'src/resources/scss/styles.scss'
				}
			}
		},*/
		
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
		},

		watch: {
			scripts: {
				files: ['src/resources/js/**/*.js'],
				tasks: ['concat:dist']
			},
			styles: {
				files: ['src/resources/css/*.scss'],
				tasks: ['sass']
			}
		}
	});

	//npm tasks
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-ngdocs');

	//tasks
	grunt.registerTask('default', 'Default Task Alias', ['build']);

	grunt.registerTask('build', 'Build the application', 
		[
		'concat'
		]);
}