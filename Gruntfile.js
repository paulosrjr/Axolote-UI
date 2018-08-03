module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            app: {
                files: {
                    './public/ng/js/serverController.js': ['./js/controllers/serverController.js'],
                    './public/ng/js/workController.js': ['./js/controllers/workController.js'],
                    './public/ng/js/backupController.js': ['./js/controllers/backupController.js'],
                    './public/ng/js/serverService.js': ['./js/services/serverService.js'],
                    './public/ng/js/workService.js': ['./js/services/workService.js'],
                    './public/ng/js/backupService.js': ['./js/services/backupService.js'],
                    './public/ng/app.js': ['./js/app.js'],
                    './public/ng/config.js': ['./js/config.js'],
                    './public/ng/routes.js': ['./js/routes.js']
                }
            }
        },
        concat: {
            js: {
                src: ['./public/ng/app.js', './public/ng/config.js', './public/ng/routes.js', './public/ng/js/*.js'],
                dest: './public/js/min/app.js'
            }
        },
        uglify: {
            js: { 
                src: ['./public/js/min/app.js'],
                dest: './public/js/min/app.js'
            }
        },
        cssmin: {
            target: {
                src: ["./lib/*.css", "./css/app.css"],
                dest: "./public/css/app.min.css"
            }
        },
        watch: {
            options: {
                livereload: true,
                spawn: false
            },
            src: {
                files: ['js/**/*.js', 'lib/*.js', 'css/*.css'],
                tasks: ['default'],
            },
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.registerTask('default', ['ngAnnotate', 'concat', 'uglify', 'cssmin']);
};
