var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');

// css file paths
//var cssFolder = 'main/assets/css'; // folder for final style.css/style-custom-prop-fallbac.css files
//var scssFilesPath = 'main/assets/css/**/*.scss'; // scss files to watch

gulp.task( 'sass', function() {
    return gulp.src('*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(sass())
      .pipe(gulp.dest('.'))
});