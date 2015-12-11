var gulp 		= require('gulp'),
	concat 		= require('gulp-concat'),
	plumber 	= require('gulp-plumber'),
	server 		= require('tiny-lr')(),
	refresh 	= require('gulp-livereload'),
	minifyCss  	= require('gulp-minify-css'),
	notify 		= require('gulp-notify'),
	nodemon 	= require('gulp-nodemon'),
	jshint 		= require('gulp-jshint'),
	watch 		= require('gulp-watch'),
	livereload 	= require('gulp-livereload'),
	lrPort 		= 35729;

var paths = {
  styles: ['./public/styles/*.css'],
  scripts: [
	'./public/scripts/**/*.js'
  ],
  html: [
	'./public/views/**/*.html'
  ],

  server: {
	js: ['./app/**/*.js']
  }
};

gulp.task('serve', function(){
	nodemon({'script': 'server.js'});
});

gulp.task('lint', function(){
	return gulp.src(paths.scripts)
	.pipe(plumber())
	.pipe(jshint())
	.pipe(jshint.reporter('default'))
	.pipe(notify({message: 'jshint done'}));
});

gulp.task('scripts', function(){
	return gulp.src(paths.scripts)
	.pipe(plumber())
	.pipe(concat('main.js'))
	.pipe(gulp.dest('./public/build/scripts'))
	.pipe(refresh(server))
	.pipe(livereload())
	.pipe(notify({message: 'JS concated'}));
});

gulp.task('minifyCss', function(){
  return gulp.src(paths.styles)
	.pipe(plumber())
	.pipe(minifyCss())
	.pipe(gulp.dest('./public/build/styles'))
	.pipe(refresh(server))
	.pipe(livereload())
	.pipe(notify({message: 'Css minify done'}));
});

gulp.task('html', function(){
  return gulp.task('html', function(){
	gulp.src(paths.html)
		.pipe(refresh(server))
		.pipe(livereload(server))
		.pipe(notify({message: 'Views refreshed'}));
  	});
});

gulp.task('build', ['minifyCss', 'scripts', 'lint', 'html']);

gulp.task('lr', function(){
	server.listen(lrPort, function(err){
		if(err) {
			return console.error(err);
		}
	});
});

gulp.task('watch', function(){
	gulp.watch(paths.html, ['html']);
	gulp.watch(paths.scripts, ['lint', 'scripts']);
	gulp.watch(paths.styles, ['minifyCss']);
});

gulp.task('default', ['build', 'lr', 'serve', 'watch']);