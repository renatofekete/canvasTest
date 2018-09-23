const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

// HTML FILES
gulp.task('html', function () {
  gulp.src("src/*html")
    .pipe(gulp.dest("docs"));
});
// SASS
gulp.task("sass", function () {
  gulp.src("src/scss/main.scss")
    .pipe(sass({
        outputStyle: "compressed"
      })
      .on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('docs/css'));
});
// Javascript
gulp.task("uglify", function () {
  gulp.src("src/js/*.js")
    //.pipe(concat('app.js'))
    .pipe(babel({
      presets: 'env'
    }))
    .pipe(uglify())
    .pipe(gulp.dest('docs/js'));
});

gulp.task('default', [
  'html',
  'sass',
  'uglify'
]);

gulp.task('watch', function () {
  gulp.watch('src/*.html', ['html']);
  gulp.watch('src/scss/main.scss', ['sass']);
  gulp.watch('src/js/*.js', ['uglify']);
});