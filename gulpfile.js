var gulp = require("gulp");
var sass = require('gulp-sass');
var browserify = require('browserify');
var source = require('vinyl-source-stream')
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
  return gulp.src('style/scss/*.scss')
   .pipe(sass())
   .on('error', sass.logError)
   .pipe(gulp.dest('style/css/'))
   .pipe(browserSync.stream());
   //.pipe(browserSync.reload({stream: true}));
});


gulp.task('browserify', function() {
    // Grabs the app.js file
    return browserify('./js/app.js')
        // bundles it and creates a file called main.js
        .bundle()
        .pipe(source('bundle.js'))
        // saves it the public/js/ directory
        .pipe(gulp.dest('./dist'));
});

// Static server
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("style/scss/*.scss", ['sass']);
    //gulp.watch("js/*.js");
    gulp.watch("./*.html").on('change', browserSync.reload);
});



gulp.task('default', ['serve', 'browserify']);
