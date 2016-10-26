/**
 *    © Copyright 2016 IBM Corp.
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */
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
        require.resolve('@angular/common/bundles/common.umd.js'),
        require.resolve('@angular/compiler/bundles/compiler.umd.js'),
        require.resolve('@angular/core/bundles/core.umd.js'),
        require.resolve('@angular/router/bundles/router.umd.js'),
        require.resolve('@angular/platform-browser/bundles/platform-browser.umd.js'),
        require.resolve('@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js'),
        require.resolve('@angular/upgrade/bundles/upgrade.umd.js'),
        require.resolve('@angular/http/bundles/http.umd.js'),

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

gulp.task('copy-angular-in-memory-web-api', ['clean'], function () {
        return gulp.src(['node_modules/angular-in-memory-web-api/**/*'])
          .pipe(gulp.dest(libroot + "/angular-in-memory-web-api"));
});

gulp.task('build', ['clean','build.lib','build.css','copy-rxjs-lib','copy-angular-in-memory-web-api'], function () {
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
    gulp.watch(['app/**/*.ts', 'app/**/*.html', 'app/**/*.css'], function (event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        var path = event.path.substr(0, event.path.lastIndexOf(".")) + ".ts"
        var tsProject = typescript.createProject('./tsconfig.json', { typescript: require('typescript') });
        tsProject.src([path])
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
