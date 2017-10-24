'use strict';

// Require the needed npm modules.
const gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	sass = require('gulp-sass'),
	maps = require('gulp-sourcemaps'),
	useref = require('gulp-useref'),
	iff = require('gulp-if'),
	csso = require('gulp-csso'),
	concat = require('gulp-concat'),
	del = require('del');

const options = {
	src: 'src',
	dist: 'dist'
};

// This task may be redundant due to 'minifyScripts' task.  Delete it?
gulp.task('concatScripts', function() {
	return gulp.src(['js/**/*', 'js/*'])
			.pipe(concat('all.js'))
			.pipe(gulp.dest('js'));
});

gulp.task('scripts', function() {
	gulp.src(['js/**/*', 'js/*'])
		.pipe(concat('all.js'))
		.pipe(uglify())
		.pipe(rename('all.min.js'))
		.pipe(gulp.dest(options.dist + '/scripts/'));
});

gulp.task('styles', function() {
	return gulp.src(['sass/global.scss'])
			.pipe(sass())
			.pipe(csso())
			.pipe(rename('all.min.css'))
			.pipe(gulp.dest(options.dist + '/styles/'));
});














//
