var gulp = require('gulp');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('useref', () => {
    return gulp.src('app/partial_build/*.html')
        .pipe(useref())
        .pipe(gulpIf('*.css', autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        })))
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulp.dest('dist'));
});