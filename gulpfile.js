const gulp        = require('gulp');
const babel       = require('gulp-babel');
const concat      = require('gulp-concat');
const sri         = require('gulp-sri');
const rename      = require('gulp-rename');
const fs          = require('fs');
const browserify  = require('gulp-browserify');

gulp.task('build', ['production', 'hash']);
gulp.task('production', ['prod', 'global-prod']);

gulp.task('hash', function() {
  return gulp.src(fs.readdirSync('./dist').map(function(file) {
    return './dist/' + file;
  })).pipe(sri({
    fileName: 'checksum.json',
    algorithms: ['sha256']
  })).pipe(gulp.dest('./dist'));
});

gulp.task('prod', function() {
  gulp.src(fs.readdirSync('./src/js').map(function(file) {
    return './src/js/' + file;
  }))
    .pipe(babel({
      presets: ['env'],
      plugins: ['babel-plugin-transform-unicode-property-regex'],
      comments: false,
      compact: true,
      minified: true
    }))
    .pipe(browserify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('global-prod', function() {
  gulp.src(fs.readdirSync('./src/js').map(function(file) {
    return './src/js/' + file;
  }))
    .pipe(babel({
      presets: ['env'],
      plugins: ['babel-plugin-transform-unicode-property-regex'],
      comments: false,
      compact: true,
      minified: true
    }))
    .pipe(browserify())
    .pipe(concat('prototype-storm.min.js'))
    .pipe(gulp.dest('./dist'));
});
