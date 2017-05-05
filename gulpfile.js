var gulp          = require('gulp');
var watch         = require('gulp-watch');
var clean         = require('gulp-rimraf');
var rename        = require('gulp-rename');
var foreach       = require('gulp-foreach');
var watchPath     = './dist';
var destPathPub   = '../glow-laravel/public/';
var destPathViews = '../glow-laravel/resources/views/';
var path          = require('path');
var GulpSSH       = require('gulp-ssh');
var async         = require('async');
var batchReplace  = require('gulp-batch-replace');
var fs            = require('fs');
var tap           = require('gulp-tap');
var replace       = require('gulp-replace');
var svgSprite     = require('gulp-svg-sprite');
var argv          = require('yargs').argv;

var commitMsg     = argv.msg || 'updates';
var shell         = require('gulp-shell');
var push          = shell.task(['cd ../glow-laravel && git add . &&  git commit -m=' + commitMsg +  ' && git push']);

var config = {
  host:        '52.1.166.127',
  port:        22,
  username:    'ec2-user',
  privateKey:  fs.readFileSync('./glowsite.pem')
};

var gulpSSH = new GulpSSH({
  ignoreErrors:  false,
  sshConfig:     config
});

gulp.task('push', push);

var ssh = function () {
  var path = '/var/www/glow-site';
  return gulpSSH
  .shell(['cd ' + path + ' && git fetch && git pull origin dev'], {filePath: 'ssh.log'})
  .pipe(gulp.dest('../glow-site-logs'));
};

gulp.task('ssh', ssh);
var getBladeSrc = function (file, ext) {
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

var svgConfig = {
  mode: {
    symbol: {
      inline: true,
      example: true,
      render: {
        css: true
      }
    }
  },
  svg: {
    dimensionAttributes: true,
    namespaceIDs: false,
    namespaceClassnames: false
  },
  shape: {
    transform: ['svgo'],
    dimension: {
      maxWidth: 300,
      maxHeight: 100
    }
  }
};

var lockupSvgConfig = {
  mode: {
    symbol: {
      inline: true,
      example: true,
      render: {
        css: true
      },
      sprite: 'lockups-sprite.svg'
    }
  },
  svg: {
    dimensionAttributes: true,
    namespaceIDs: false,
    namespaceClassnames: false
  },
  shape: {
    transform       : [
      {svgo       : {
        plugins : [
          {cleanupIDs: false}
        ]
      }}
    ]
  }
};

var iconSvgConfig = {
  mode: {
    symbol: {
      inline: true,
      example: true,
      render: {
        css: true
      },
      sprite: 'icons-sprite.svg'
    }
  },
  svg: {
    dimensionAttributes: true,
    namespaceIDs: false,
    namespaceClassnames: false
  },
  shape: {
    transform       : [
      {svgo       : {
        plugins : [
          {cleanupIDs: false}
        ]
      }}
    ]
  }
};

var currentFileName;

gulp.task('fix-classnames', function (cb) {
  return gulp.src('./svg-src/client-logos/*.svg')
  .pipe(tap(function (file) {
    currentFileName = path.basename(file.path, '.svg');
  }))
  .pipe(replace('cls', function () {
    return currentFileName;
  }))
  .pipe(gulp.dest('./svg-src/sprites'));
});

gulp.task('create-sprite', ['fix-classnames'], function () {
  gulp.src('**/*.svg', {cwd: './svg-src/sprites'})
  .pipe(svgSprite(svgConfig))
  .pipe(gulp.dest('./src/components/ui/svg-sprites'));
});

gulp.task('create-lockup-sprite', function () {
  gulp.src('**/*.svg', {cwd: './svg-src/lockups'})
  .pipe(svgSprite(lockupSvgConfig))
  .pipe(gulp.dest('./src/components/ui/lockup'));
});

gulp.task('create-icon-sprite', function () {
  gulp.src('**/*.svg', {cwd: './svg-src/icons'})
  .pipe(svgSprite(iconSvgConfig))
  .pipe(gulp.dest('./src/components/ui/icons'));
});

gulp.task('client-logos', ['fix-classnames', 'create-sprite']);
gulp.task('clean', ['clean-scripts', 'clean-php', 'clean-css']);
gulp.task('clean-dist', ['clean-dist-css', 'clean-dist-maps', 'clean-dist-js', 'clean-dist-html']);
gulp.task('default', ['copy-css', 'copy-js', 'copy-html-to-php']);

