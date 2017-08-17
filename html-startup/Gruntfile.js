module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
              files: [{
                expand: true,
                cwd: 'sass/',
                src: ['*_en.scss', '*_ar.scss'],
                dest: 'sass/css/',
                ext: '.css'
              }]
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'sass/css/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'assets/css/',
                    ext: '.min.css'
                }]
            }
        },
        uglify: {
           target: {
               options: {
                  banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */',
                  //compress: { drop_console: true }
                },
               files: {
                 'assets/js/lib.min.js': ['sass/js/*.js', '!custom.js', '!readmore.js', '!jquery-1.12.1.js', '!framebust.js', '!jquery-ui.min.js', '!slick.min.js', '!jquery.social.stream.1.5.12.js', '!jquery.social.stream.wall.1.6.js'],
                 'assets/js/jquery-1.12.1.min.js': 'sass/js/jquery-1.12.1.js',
                 'assets/js/framebust.min.js': 'sass/js/framebust.js',
                 'assets/js/custom.min.js': 'sass/js/custom.js',
                 'assets/js/jquery-ui.min.js': 'sass/js/jquery-ui.min.js',
                 'assets/js/jquery.social.stream.1.5.12.min.js': 'sass/js/jquery.social.stream.1.5.12.js',
                 'assets/js/jquery.social.stream.wall.1.6.min.js': 'sass/js/jquery.social.stream.wall.1.6.js',
                 'assets/js/slick.min.js': 'sass/js/slick.min.js',
                'assets/js/readmore.min.js': 'sass/js/readmore.js',
                'assets/js/handlebars.min.js': 'sass/js/handlebars.min.js',
                'assets/js/jquery.storelocator.min.js': 'sass/js/jquery.storelocator.js',
                'assets/js/jquery.mCustomScrollbar.min.js': 'sass/js/jquery.mCustomScrollbar.min.js',
                'assets/js/ilightBox.min.js': 'sass/js/ilightbox.js',
				'assets/js/markerclusterer.min.js': 'sass/js/markerclusterer.js'
               }
            }
        },
        watch: {
        sass: {
          files: 'sass/*.scss',
          tasks: ['sass']
        },
        cssmin: {
          files: 'sass/css/*.css',
          tasks: ['cssmin']
        },
        uglify: {
          files: 'assets/js/custom/*.js',
          tasks: ['uglify']
        }
      },
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['sass', 'cssmin', 'uglify']);
};
