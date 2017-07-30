var gulp = require('gulp');

gulp.task('fonts', function() {
    return gulp.src('app/partial_build/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'))
});