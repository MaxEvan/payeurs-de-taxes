var gulp   = require('gulp');
var mincss = require('gulp-minify-css');
var less   = require('gulp-less');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');


gulp.task('default', function() {
	gulp.start(['css', 'js'])
	gulp.watch('public/css/less/*.less', ['css'])
	gulp.watch('public/js/*.js', ['js'])
});

gulp.task('css', function() {
	gulp.src(['public/css/css/*.css', 'public/css/less/*.less'])
		.pipe(concat('min.css'))
		.pipe(less())
		.pipe(mincss())
		.pipe(gulp.dest('public/css/min'))
});

gulp.task('js', function() {
	gulp.src('public/js/*.js')
		.pipe(concat('min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('public/js/min'))
});