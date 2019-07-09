module.exports = function (grunt) {
	grunt.initConfig({
		ngtemplates: {
			myApp: {
				options: {
					module: 'wcCardsOverlayTemplates',
					standalone: true
				},
				cwd: '.',
				src: ['cards-overlay.html'],
				dest: 'wccardsoverlaytemplates.js'
			}
		},
		concat: {
		    options: {
		    },
		    dist: {
		      src: ['wccardsoverlaytemplates.js', 'index.js'],
		      dest: 'dist/wccardsoverlay.js',
		    },
		  },
	});

	grunt.loadNpmTasks('grunt-angular-templates');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default',['ngtemplates','concat']);
};