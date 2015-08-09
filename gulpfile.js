'use strict';

const gulp = require('gulp');
const webpack = require('webpack-stream');
const del = require('del');

const webpackConf = {
  output: {filename: 'bundle.js'},
  module: {
    loaders: [
      { loader: 'babel' }
    ]
  }
};

// Webpack js files into one bundle
gulp.task('build', ['clean'], function() {
  return gulp.src('webapp/index.js')
    .pipe(webpack(webpackConf))
    .pipe(gulp.dest('dist/'));
});


// Clean out the dist folders
gulp.task('clean', function() {
  del(['dist/bundle.js']);
});

gulp.task('default', ['build'], function() {
});