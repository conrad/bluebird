module.exports = function(grunt) {

  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),

    clean: ['dist', '!dist/bower_components'],

    jshint: {
      files: ['Gruntfile.js', 'app/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: {        // 'destination': 'source'
          'dist/index.html': 'app/index.html',
          'dist/views/main.html': 'src/contact.html'
        }
      }
    },

    concat: {
      options: { separator: ';' },
      dist: {
        src: ['app/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: { 
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'  // goes at top of output
      },
      dist: {
        files: {    
        // create a file within dist/ minifying the file that concat produces
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    compass: {
      dist: {                   // Target
        options: {              // Target options
          sassDir: 'sass',
          cssDir: 'css',
          environment: 'production'
        }
      }
    },
      // dist: {
      //   files: {
      //     'main.css': 'main.scss'  // 'destination': 'source'
      //   }
      // }

    // ng-annotate tries to make the code safe for minification automatically
    // by using the Angular long form for dependency injection.
    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: '*.js',
          dest: '.tmp/concat/scripts'
        }]
      }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    watch: {
      gruntfile: {
        files: ['Gruntfile.js'],
      },
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      js: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint']
      },
      css: {
        files: ['app/styles/**/*.{scss,sass}'],
        tasks: ['compass']
      }


    }

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('default', ['clean', 'htmlmin', 'concat', 'uglify', 'compass']);

  // grunt.registerTask('build', ['jshint', 'concat', 'jshint']);

};