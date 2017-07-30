var gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('babel', () => {
    return gulp.src('app/development/es6/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('app/partial_build/js'));
});