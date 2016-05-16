/**
 * Created by 15061730 on 2015/5/27.
 */
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    less = require('gulp-less'),
    sourcemaps = require('gulp-sourcemaps');

//编译less
gulp.task('less', function () {
    gulp.src(['src/less/*.less','!src/less/login.less','!src/less/icon.less'])
        .pipe(less())
  //      .pipe(sourcemaps.init()) //生成sourcemap
        .pipe(minifycss({
            keepBreaks: true    //压缩保持换行
        }))
        //    .pipe(sourcemaps.write('./'))
        .pipe(concat('main.css'))
        .pipe(gulp.dest('dist/css'))
});

//编译login
gulp.task('login', function () {
    gulp.src('!src/less/login.less')
        .pipe(less())
        .pipe(minifycss({
            keepBreaks: true    //压缩保持换行
        }))
        .pipe(gulp.dest('dist/css'))
});
/*
gulp.task('css', function () {
        return gulp.src(['src/css/weixin.css','src/css/!*.css'])
            .pipe(autoprefixer({
                browsers: 'last 2 versions'
            }))
            .pipe(concat('weixin.css'))
        .pipe(gulp.dest('style/'));
});*/d
gulp.task('default', ['less','login']);
gulp.task('watch', ['default'], function () {
    //css
    gulp.watch('src/less/**', ['less']);
    gulp.watch('src/less/login.less', ['login']);
})
