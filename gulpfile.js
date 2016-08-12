var gulp = require('gulp');
var fs = require('fs');
var sass = require('gulp-sass');
var path = require('path');
var merge = require('merge-stream');
var concat = require('gulp-concat');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var cache = require('gulp-cache');
var imagemin = require('gulp-imagemin');
var notify = require('gulp-notify');

var paths = {
	"compiles":{
		"css":{
			"from":"public/src/sass",
			"to":"public/dest/css"
		},
		"scripts":{
			"from":"public/src/scripts",
			"to":"public/dest/scripts"
		},
		"image":{
			"from":"public/src/imgs/**/*.{jpeg,jpg,png,gif}",
			"to":"public/dest/imgs"
		}
	}
}

function getFolders(dir){
	return fs.readdirSync(dir).filter(function(file){
		return fs.statSync(path.join(dir,file)).isDirectory();
	});
}

gulp.task('scripts',function(){
	var folders = getFolders(paths.compiles.scripts.from);
	var tasks = folders.map(function(folder){
		return gulp.src(path.join(paths.compiles.scripts.from,folder,'/*.js'))
		.pipe(concat(folder+'.js'))
		//.pipe(gulp.dest(dest))
		//.pipe(uglify())
		//.pipe(rename(folder+'.min.js'))
		.pipe(gulp.dest(paths.compiles.scripts.to));
	});
	return merge(tasks);
})

gulp.task('css',function(){
	var folders = getFolders(paths.compiles.css.from);
	var tasks = folders.map(function(folder){
		return gulp.src(path.join(paths.compiles.css.from,folder,'/*.scss'))
		.pipe(sass())
		.pipe(concat(folder+'.css'))
		//.pipe(gulp.dest(dest))
		//.pipe(uglify())
		//.pipe(rename(folder+'.min.js'))
		.pipe(gulp.dest(paths.compiles.css.to));
	});
	return merge(tasks);
})

gulp.task('images', function() {  
  return gulp.src(paths.compiles.image.from)
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest(paths.compiles.image.to))
    .pipe(notify({ message: 'Images task complete' }));
});



gulp.task('default',['css','scripts','images'],function(){
	gulp.watch('public/src/sass/**/*.scss', ['css']);
	gulp.watch('public/src/scripts/**/*.js', ['scripts']);
	gulp.watch('public/src/imgs/**/*.{jpeg,jpg,png,gif}', ['images']);
});