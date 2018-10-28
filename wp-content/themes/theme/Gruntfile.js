module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: [
                'js/**/*.js'
            ],
            options: {
                expr: true,
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        sass: {
            dist: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= pkg.version %> filename.min.css <%= grunt.template.today("yyyy-mm-dd h:MM:ss TT") %> */\n',
                    outputStyle: 'compressed'
                },
                files: { 'style.css': 'sass/app.scss' }
            },
            dev: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= pkg.version %> filename.css <%= grunt.template.today("yyyy-mm-dd h:MM:ss TT") %> */\n',
                    outputStyle: 'expanded'
                },
                files: { 'style.exp.css': 'sass/app.scss' }
            },
            options: {
                implementation: require('node-sass')
            }
        },
        uglify: {
            dist: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= pkg.version %> filename.min.js <%= grunt.template.today("yyyy-mm-dd h:MM:ss TT") %> */\n',
                    report: 'gzip'
                },
                files: {
                    'app.min.js' : [
                        'js/*.js'
                    ]
                }
            },
            dev: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= pkg.version %> filename.js <%= grunt.template.today("yyyy-mm-dd h:MM:ss TT") %> */\n',
                    beautify: true,
                    compress: false,
                    mangle: false
                },
                files: {
                    'app.js' : [
                        'js/*.js'
                    ]
                }
            }
        },
        watch: {
            css: {
                files: 'sass/app.scss',
                tasks: [ 'sass' ]
            },
            scripts: {
                files: 'js/*.js',
                tasks: [ 'jshint' ]
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', [
        'jshint',
        'uglify:dist',
        'sass:dist',
    ]);

    grunt.registerTask('dev', [
        'jshint',
        'uglify:dev',
        'sass:dev',
    ]);
};