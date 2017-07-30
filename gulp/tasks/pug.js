var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var prettify = require('gulp-html-prettify');
var pug = require('gulp-pug');

gulp.task('pug', function buildHTML() {
    return gulp.src('./app/development/pug/pages/*.pug')
        .pipe(pug({
            // Your options in here. 
        }))
        .pipe(prettify({ indent_char: ' ', indent_size: 2 }))
        .pipe(gulp.dest('./app/partial_build'))
        .pipe(browserSync.reload({
            stream: true
        }));
});