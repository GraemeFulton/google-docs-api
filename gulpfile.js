//'use strict';
//
//var gulp = require('gulp');
//
//gulp.paths = {
//  src: 'src',
//  dist: 'dist',
//  tmp: '.tmp',
//  e2e: 'e2e'
//};
//
//require('require-dir')('./gulp');
//
//gulp.task('default', ['clean'], function () {
//    gulp.start('build');
//});

'use strict';

var gulp = require('gulp');
var del = require('del');
var push = require('git-push');
var argv = require('minimist')(process.argv.slice(2));

gulp.paths = {
  src: 'src',
  dist: 'dist',
  tmp: '.tmp',
  e2e: 'e2e'
};

require('require-dir')('./gulp');

gulp.task('default', ['clean'], function () {
    gulp.start('build');
});


gulp.task('deploy', function(cb) {
  var remote = argv.production ?
    {name: 'production', url: 'https://github.com/<org>/site.com', branch: 'gh-pages'},
    {name: 'test', url: 'https://github.com/<org>/test.site.com', branch: 'gh-pages'};
  push('./build', remote, cb);
});