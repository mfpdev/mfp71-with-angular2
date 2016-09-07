/// <binding AfterBuild='build' Clean='clean' />

"use strict";

var path = require('path');
var gulp = require('gulp');
var del = require('del');
var typescript = require('gulp-typescript');
var inlineNg2Template = require('gulp-inline-ng2-template');
var sourcemaps = require('gulp-sourcemaps');
var merge = require('merge2');

var angularroot = "./www/js/angular"
var libroot = angularroot + "/lib";
var approot = angularroot + "/app"
var cssroot = "./www/css"

var config = {
    libBase: 'node_modules',
    lib: [
        require.resolve('@angular/common/common.umd.js'),
        require.resolve('@angular/compiler/compiler.umd.js'),
        require.resolve('@angular/core/core.umd.js'),
        require.resolve('@angular/router/router.umd.js'),
        require.resolve('@angular/platform-browser/platform-browser.umd.js'),
        require.resolve('@angular/platform-browser-dynamic/platform-browser-dynamic.umd.js'),
        require.resolve('@angular/upgrade/upgrade.umd.js'),
        require.resolve('@angular/http/http.umd.js'),

        require.resolve('es6-shim/es6-shim.js'),
        require.resolve('reflect-metadata/Reflect.js'),
        require.resolve('reflect-metadata/Reflect.js.map'),
        require.resolve('systemjs/dist/system.src.js'),
        require.resolve('systemjs/dist/system-polyfills.js'),
        require.resolve('zone.js/dist/zone.js'),
    ],
    css : [
        require.resolve('bootstrap/dist/css/bootstrap.min.css'),
        require.resolve('bootstrap/dist/css/bootstrap.min.css.map'),
        require.resolve('bootstrap/dist/fonts/glyphicons-halflings-regular.woff2') 
    ]
};

gulp.task('build.lib', function () {
    return gulp.src(config.lib, { base: config.libBase })
        .pipe(gulp.dest(libroot));
});

gulp.task('build.css', function () {
    return gulp.src(config.css, { base: config.libBase })
        .pipe(gulp.dest(cssroot));
});


gulp.task('copy-rxjs-lib', ['clean'], function () {
        return gulp.src(['node_modules/rxjs/**/*'])
          .pipe(gulp.dest(libroot + "/rxjs"));
});

gulp.task('build', ['clean','build.lib','build.css','copy-rxjs-lib'], function () {
    var tsProject = typescript.createProject('./tsconfig.json', { typescript: require('typescript') });
    var tsSrcInlined = tsProject.src(['app/**/*.ts'])
        .pipe(inlineNg2Template());
    return tsSrcInlined
        .pipe(sourcemaps.init())
        .pipe(typescript(tsProject))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(approot));
});


gulp.task('clean', function () {
    return del([angularroot]);
}); 

gulp.task('default', ['build']);

gulp.task('watch', function () {
    gulp.watch('app/**/*.ts', function (event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        var tsProject = typescript.createProject('./tsconfig.json', { typescript: require('typescript') });
        tsProject.src([event.path])
            .pipe(inlineNg2Template())
            .pipe(sourcemaps.init())
            .pipe(typescript(tsProject))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(approot));
    });
});


gulp.task('watchbuild', function () {
    var tsProject = typescript.createProject('./tsconfig.json', { typescript: require('typescript') });
    var tsSrcInlined = gulp.src([approot + '**/*.ts'], { base: webroot })
        .pipe(inlineNg2Template({ base: webroot }));
    return tsSrcInlined
        .pipe(sourcemaps.init())
        .pipe(typescript(tsProject))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(webroot));
});
