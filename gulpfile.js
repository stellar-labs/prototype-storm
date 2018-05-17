const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const hashsum = require('gulp-hashsum');
const rename = require('gulp-rename');
const fs = require('fs');

gulp.task('build', ['production', 'hash']);

gulp.task('hash', function() {
    return gulp.src(fs.readdirSync('./dist').map(function(file) {
            return './dist/' + file;
        }))
        .pipe(hashsum({
            dest: './dist',
            hash: 'sha256'
        }));
});

gulp.task('production', function() {
    // each files
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
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist'))
    // prototype-storm.min.js
        .pipe(concat('prototype-storm.min.js'))
        .pipe(babel({
            presets: ['env'],
            plugins: ['babel-plugin-transform-unicode-property-regex'],
            comments: false,
            compact: true,
            minified: true
        }))
        .pipe(gulp.dest('./dist'));
});