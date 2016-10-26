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

/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */

declare var System: any;   

(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      'app': './js/angular/app',
      'rxjs': './js/angular/lib/rxjs',
      'angular-in-memory-web-api': './js/angular/lib/angular-in-memory-web-api',

      
      // angular bundles
      '@angular/core': './js/angular/lib/@angular/core/bundles/core.umd.js',
      '@angular/common': './js/angular/lib/@angular/common/bundles/common.umd.js',
      '@angular/compiler': './js/angular/lib/@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': './js/angular/lib/@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': './js/angular/lib/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': './js/angular/lib/@angular/http/bundles/http.umd.js',
      '@angular/router': './js/angular/lib/@angular/router/bundles/router.umd.js',
      '@angular/forms': './js/angular/lib/@angular/forms/bundles/forms.umd.js',
      // other libraries

     
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'angular-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'
      }
    }
  });
})(this);
