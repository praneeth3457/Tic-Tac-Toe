const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('js', () => {
    return gulp.src('./src/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('./public/'));
});

gulp.task('html', () => {
    return gulp.src('./src/*.html')
        .pipe(gulp.dest('./public/'));
});

gulp.task('css', () => {
    return gulp.src('./src/*.css')
        .pipe(gulp.dest('./public/'));
});

gulp.task('default', () => {
    gulp.watch(['src/*.js', 'src/*.html', 'src/*.css'],['js', 'html', 'css']);
});