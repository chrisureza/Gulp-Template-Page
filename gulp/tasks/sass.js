var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', () => {
    return gulp.src('app/development/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/partial_build/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});