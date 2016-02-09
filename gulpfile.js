var gulp = require('gulp');
var watch = require('gulp-watch');
var clean = require('gulp-rimraf');
var rename = require('gulp-rename');

var watchPath = './dist';
var destPathPub = '../glow-laravel/public/';
var destPathViews = '../glow-laravel/resources/views/';

gulp.task('copy-css', function () {
  return gulp.src(watchPath + '/*.css')
    .pipe(gulp.dest(destPathPub));
});

gulp.task('copy-js', function () {
  return gulp.src(watchPath + '/*.js')
    .pipe(gulp.dest(destPathPub));
});

gulp.task('copy-html-to-php', function () {
  return gulp.src(watchPath + '/*.html')
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
  return gulp.src(destPathPub + '/*.js')
    .pipe(clean({
      force: true
    }));
});

gulp.task('clean-css', function () {
  return gulp.src(destPathPub + '/*.css')
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
gulp.task('default', [ 'copy-css', 'copy-js', 'copy-html-to-php']);
