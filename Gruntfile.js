module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({

		//Read the package.json (optional)
		pkg: grunt.file.readJSON('package.json'),

		banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
			'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
			'* Copyright (c) <%= grunt.template.today("yyyy") %> ',

		// Task configuration.
		uglify: {
			files: {
				src: 'element-queries.js',  // source files mask
				dest: '',    // destination folder
				expand: true,    // allow dynamic building
				flatten: true,   // remove all unnecessary nesting
				ext: '.min.js'   // replace .js to .min.js
			}
		},

		watch: {
			js:  {
				files: ['element-queries.js', 'Tests/Unit/QUnit/element-queriesTest.js'],
				tasks: ['jshint', 'uglify', 'qunit']
			}
		},

		jshint: {
			options: {
				browser: true,
				globals: {
					jQuery: true,
					$: true
				}
			},
			all: ['element-queries.js']
		},

		qunit: {
			all: [
				'Tests/Unit/QUnit/**/*.html'
			]
		}
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-qunit');

	// Default task
	grunt.registerTask('default', ['jshint', 'uglify', 'qunit', 'watch']);

};