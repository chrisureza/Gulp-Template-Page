var gulp = require('gulp');
var browserSync = require('browser-sync').create();


gulp.task('browserSync', () => {
    browserSync.init({
        server: {
            baseDir: 'app/partial_build'
        }
    });
});