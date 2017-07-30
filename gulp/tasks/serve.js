var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('serve', ['browserSync', 'sass', 'babel'], () => {
    gulp.watch('app/development/scss/**/*.scss', ['sass']);
    gulp.watch('app/development/es6/**/*.js', ['babel']);
    gulp.watch('app/development/pug/**/*.pug', ['pug']);
    gulp.watch('app/partial_build/**/*.html', browserSync.reload);
    gulp.watch('app/partial_build/js/**/*.js', browserSync.reload);
});