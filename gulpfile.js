var gulp = require('gulp');

// Run external processes, like jekyll
var cp = require('child_process');

// Better livereload
var browserSync = require('browser-sync');

// postCSS & plugins
var postcss = require('gulp-postcss');
var cssnano = require('cssnano');
var importCSS = require('postcss-import');
var customMedia = require('postcss-custom-media');
var customProperties = require('postcss-custom-properties');
var discardComments = require('postcss-discard-comments');
var autoprefixer = require('autoprefixer');
var processors = [
    importCSS(),
    customMedia(),
    customProperties(),
    discardComments(),
    autoprefixer({
        browsers: ['last 1 version']
    }),
    cssnano(),
];

gulp.task('css', function() {
    browserSync.notify('Transforming CSS with PostCSS');
    return gulp.src('./css/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./_site/css'))
        .pipe(browserSync.stream());
});

gulp.task('del:css', function*() {
  return del([
    '_site/css/*'
  ]);
});

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function(done) {
    browserSync.notify('Building Jekyll');
    return cp.spawn('bundle', ['exec', 'jekyll', 'build', '--incremental'], { stdio: 'inherit' }).on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function() {
    browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['jekyll-build', 'css'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        },
        host: "localhost"
    });
});

gulp.task('watch', function() {
    // Watch for .css changes and reload after has run
    gulp.watch(['css/*.css'], ['del:css', 'css']);
    // Watch .html files and posts
    gulp.watch(['*.html', '_includes/*.html', '_layouts/*.html', '*.md', '*.markdown', '_posts/*'], ['jekyll-rebuild']);
});

gulp.task('default', function() {
    gulp.start('browser-sync', 'watch');
});
