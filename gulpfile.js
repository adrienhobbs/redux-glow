var gulp = require('gulp');
var watch = require('gulp-watch');
var clean = require('gulp-rimraf');
var rename = require('gulp-rename');
var foreach = require('gulp-foreach');
var watchPath = './dist';
var destPathPub = '../glow-laravel/public/';
var destPathViews = '../glow-laravel/resources/views/';
var path = require('path');
// var replace = require('gulp-replace');
var async = require('async');
var batchReplace = require('gulp-batch-replace');

var getBladeSrc = function (file, ext) {
  console.log(ext);
  var folder = (ext === '.css') ? 'css/' : 'js/';
  return `{{ URL::asset('${folder}${file}') }}`;
};

var filenames = [];

gulp.task('bladeify', function (cb) {
  async.series([
    function (callback) {
      gulp.src(['./dist/*.js', './dist/*.css'])
      .pipe(foreach(function (stream, file) {
        var filename = path.basename(file.path);
        var ext = path.extname(file.path);
        filenames.push([filename, getBladeSrc(filename, ext)]);
        return stream;
      }))
      .pipe(gulp.dest('./dist'))
      .on('end', callback);
    },
    function (callback) {
      gulp.src('./dist/index.html')
      .pipe(batchReplace(filenames))
      .pipe(gulp.dest('./dist'))
      .on('end', callback);
    }
  ],
  function (err, values) {
    if (err) {
      cb(err);
    } else {
      console.log('success');
      cb();
    }
  });
});

gulp.task('copy-css', function () {
  return gulp.src(watchPath + '/*.css')
  .pipe(gulp.dest(destPathPub + 'css/'));
});

gulp.task('copy-js', function () {
  return gulp.src(watchPath + '/*.js')
  .pipe(gulp.dest(destPathPub + 'js/'));
});

gulp.task('copy-html-to-php', function () {
  return gulp.src(watchPath + '/index.html')
  .pipe(rename('welcome.blade.php'))
  .pipe(gulp.dest(destPathViews));
});

gulp.task('clean-php', function () {
  return gulp.src(destPathViews + 'welcome.blade.php')
  .pipe(clean({
    force: true
  }));
});

gulp.task('clean-scripts', function () {
  return gulp.src(destPathPub + '*.js')
  .pipe(clean({
    force: true
  }));
});

gulp.task('clean-css', function () {
  return gulp.src(destPathPub + '*.css')
  .pipe(clean({
    force: true
  }));
});

gulp.task('watch', function () {
  return gulp.src('./**')
  .pipe(watch('./**/*'));
});

gulp.task('clean-dist-css', function () {
  return gulp.src(watchPath + '/*.css')
  .pipe(clean({
    force: true
  }));
});

gulp.task('clean-dist-js', function () {
  return gulp.src(watchPath + '/*.js')
  .pipe(clean({
    force: true
  }));
});
gulp.task('clean-dist-maps', function () {
  return gulp.src(watchPath + '/*.map')
  .pipe(clean({
    force: true
  }));
});

gulp.task('clean-dist-html', function () {
  return gulp.src(watchPath + '/*.html')
  .pipe(clean({
    force: true
  }));
});
gulp.task('clean', ['clean-scripts', 'clean-php', 'clean-css']);
gulp.task('clean-dist', ['clean-dist-css', 'clean-dist-maps', 'clean-dist-js', 'clean-dist-html']);
gulp.task('default', ['copy-css', 'copy-js', 'copy-html-to-php']);
