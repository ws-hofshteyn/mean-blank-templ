var gulp 		= require('gulp'),
	concat 		= require('gulp-concat'),
	plumber 	= require('gulp-plumber'),
	server 		= require('tiny-lr')(),
	minifyCss  	= require('gulp-minify-css'),
	sass 		= require('gulp-sass'),
	notify 		= require('gulp-notify'),
	nodemon 	= require('gulp-nodemon'),
	jshint 		= require('gulp-jshint'),
	watch 		= require('gulp-watch'),
	browserSync = require('browser-sync').create(),
	lrPort 		= 35729;

var paths = {
  styles: 	['./public/app/**/*.scss', './public/app/*.scss'],
  scripts: 	['./public/app/**/*.js'],
  html: 	['./public/app/**/*.html'],
  server: 	['./app/**/*.js']
};

gulp.task('serve', () => {
	nodemon({'script': 'server.js'});
});

gulp.task('lint', () => {
	return gulp.src(paths.scripts, paths.server)
	.pipe(plumber())
	.pipe(jshint())
	.pipe(jshint.reporter('default'))
	.pipe(notify({message: 'jshint done'}));
});

gulp.task('scripts', () =>{
	return gulp.src(paths.scripts, paths.server)
	.pipe(plumber())
	.pipe(concat('main.js'))
	.pipe(gulp.dest('./public/build/scripts'))
	.pipe(notify({message: 'JS concated'}));
});

gulp.task('sass', (done) => {

	var sassStream;

	sassStream = gulp.src(paths.styles)
		.pipe(sass({
			errLogToConsole : true,
			outputStyle     : 'compressed'
		}));

	sassStream
		.pipe(concat('style.css'))
		.pipe(gulp.dest('public/assets/styles'))
		.on('end', done);
});

gulp.task('minifyCss', () => {
  return gulp.src(paths.styles)
	.pipe(plumber())
	.pipe(minifyCss())
	.pipe(gulp.dest('./public/build/styles'))
	.pipe(notify({message: 'Css minify done'}));
});

gulp.task('html', () => {
  return gulp.task('html', () => {
	gulp.src(paths.html)
		.pipe(notify({message: 'Views refreshed'}));
  	});
});

gulp.task('build', ['sass', 'minifyCss', 'scripts', 'lint']);

gulp.task('lr', () => {
	server.listen(lrPort, (err) => {
		if(err) {
			return console.error(err);
		}
	});
});

gulp.task('browser-sync', () => {
    browserSync.init({
        server: {
            baseDir: "./public"
        }
    });
});

gulp.task('watch', () => {
	gulp.watch(paths.html, ['html']).on('change', browserSync.reload);
	gulp.watch(paths.scripts, ['lint', 'scripts']).on('change', browserSync.reload);
	gulp.watch(paths.styles, ['sass', 'minifyCss']).on('change', browserSync.reload);
	gulp.watch(paths.server, ['lint']).on('change', browserSync.reload);
});

gulp.task('default', ['build', 'lr', 'serve', 'browser-sync', 'watch']);
