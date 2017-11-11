module.exports = function(grunt) {
    // // Project configuration
    // grunt.initConfig({
    //     pkg: grunt.file.readJSON('package.json'),
    //     uglify: {
    //         options: {
    //             banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    //         },
    //         build: {
    //             src: 'src/<%= pkg.name %>.js',
    //             dest: 'build/<%= pkg.name %>.min.js'
    //         }
    //     }
    // });

    // // Load the plugin that needed.
    // grunt.loadNpmTasks('grunt-contrib-uglify');

    // // regist task(s)
    // grunt.registerTask('default', ['uglify']);


  var sassStyle = 'expanded';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // sass: {
    //   output : {
    //     options: {
    //       style: sassStyle
    //     },
    //     files: {
    //       './style.css': './scss/style.scss'
    //     }
    //   }
    // },
    concat: {
      dist: {
        src: ['./src/plugin.js', './src/plugin2.js'],
        dest: './global.js',
      },
    },
    uglify: {
      compressjs: {
        files: {
          './global.min.js': ['./global.js']
        }
      }
    },
    jshint: {
      all: ['./src/learnMVC/js/HelloAngular_MVC.js']
    },
    watch: {
      scripts: {
        files: ['./src/learnMVC/js/*.js'],
        tasks: ['jshint']
        // tasks: ['concat','jshint','uglify']
      },
      // sass: {
      //   files: ['./scss/style.scss'],
      //   tasks: ['sass']
      // },
      livereload: {
          options: {
              livereload: '<%= connect.options.livereload %>' //监听connect中声明的端口
          },
          files: [  //下面文件的改变就会实时刷新网页
                    './src/learnMVC/*.html',
                    './src/learnMVC/style/{,*/}*.css',
                    './src/learnMVC/js/{,*/}*.js',
                    './src/learnMVC/images/{,*/}*.{png,jpg}'
          ]
      }
    },
    connect: {
      options: {
          port: 9000,
          open: true,
          livereload: 35729, //声明给watch监听的端口
          // Change this to '0.0.0.0' to access the server from outside
          hostname: 'localhost' // 本机域名
      },
      server: {
        options: {
          port: 9001,
          base: './src/learnMVC/'
        }
      }
    }
  });

  // grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // grunt.registerTask('outputcss',['sass']);
  grunt.registerTask('concatjs',['concat']);
  grunt.registerTask('compressjs',['concat','jshint','uglify']);
  // grunt.registerTask('watchit',['sass','concat','jshint','uglify','connect','watch']);
  grunt.registerTask('watchit',['concat','jshint','uglify','connect','watch']);
  grunt.registerTask('default');

};