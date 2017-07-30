var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');

gulp.task('imagemin', () => {
    return gulp.src('app/partial_build/imgs/**/*.+(png|jpg|gif|svg)')
        .pipe(cache(imagemin()))
        .pipe(gulp.dest('dist/imgs'));
});