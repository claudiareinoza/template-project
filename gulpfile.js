var gulp = require('gulp'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify');
    sourcemaps = require('gulp-sourcemaps');

gulp.task('default', ['watch']);

// Styles
gulp.task('sass', function() {
  return gulp.src('scss/main.scss')
  // return gulp.src('scss/**/*.scss') //cada vez que se modifique cualquier file corre la tarea

  .pipe(sass({ style: 'expanded', }))
  .pipe(sourcemaps.init())
  .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
  .pipe(gulp.dest('css'))
  .pipe(rename({ suffix: '.min'}))
  .pipe(minifycss())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('css'))
  .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('watch', ['sass'], function () {
  gulp.watch('scss/**/*.scss', ['sass']);
});
