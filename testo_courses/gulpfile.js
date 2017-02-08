'use strict'
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglifyjs'),
	cssNano = require('gulp-cssnano'),
	cssRename = require('gulp-rename'),
	imageMin = require('gulp-imagemin'),
	pngQuant = require('gulp-pngquant'),
	cache = require('gulp-cache'),
	autoPrefixer = require('gulp-autoprefixer'),
	del = require('del');

gulp.task('sass', function() {
	return gulp.src('app/sass/**/*.sass')
	.pipe(sass({outputStyle: 'expanded'}))
	.pipe(autoPrefixer({
		browsers: ['last 15 versions'],
        cascade: false
	}))
	.pipe(gulp.dest('app/css'))

});

gulp.task('browser',['css-libs', 'script'], function() {
	 browserSync.init({
        server: {
            baseDir: "app"
        },
        notify: false
    });
});

gulp.task('script', function() {
	return gulp.src(['app/libs/jquery/dist/jquery.min.js', 
		'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js',
		'app/libs/owl-carousel/owl-carousel/owl.carousel.min.js'])
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'))
});

gulp.task('css-libs', ['sass'], function() {
	return gulp.src('app/css/libs.css')
	.pipe(cssNano())
	.pipe(cssRename({suffix: '.min'}))
	.pipe(gulp.dest('app/css'))


});

gulp.task('imgMin', function() {
	return gulp.src('app/img/**/*')
	.pipe(cache (imageMin({
		interlaced: true,
		progressive: true,
		svgoPlugins: [{removeViewbox: false}],
		use: [pngQuant()]
	})))
	.pipe(gulp.dest('dist/img'))

});

// gulp.task('png', function() {
// 	return gulp.src('app/img/**/*')
// 	.pipe(pngQuant())
// 	.pipe(gulp.dest('dist/img'))
// });


gulp.task('build',['imgMin', 'sass', 'script', 'del'] ,function() {
	var buildHtml = gulp.src('app/*.html')
		.pipe(gulp.dest('dist'))
	var buildCss = gulp.src(['app/css/**/*.css', '!app/css/libs.css'])
		.pipe(gulp.dest('dist/css'))
	var buildJs = gulp.src('app/js/**/*.js')
		.pipe(gulp.dest('dist/js'))
	var buildFonts = gulp.src('app/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'))
});

gulp.task('del', function() {
	return del.sync('dist')
});

gulp.task('mywatch', ['browser'], function () { 
		gulp.watch('app/sass/**/*.sass', ['sass'])
		gulp.watch('app/css/**/*.css', browserSync.reload)
		gulp.watch('app/*.html', browserSync.reload)
		gulp.watch('app/js/**/*.js', browserSync.reload)
});

// , 'css-libs', 'script' - maybe it will necessary add to
 // gulp.task('mywatch', ['browser', 'css-libs', 'script']

gulp.task('default', ['mywatch']);

gulp.task('hello', function() {
	console.log('hello,world');
});