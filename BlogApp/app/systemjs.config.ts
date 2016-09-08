declare var System: any; 
(function (global) {
    // map tells the System loader where to look for things
    var map = {
        'app': './js/angular/app',
        'rxjs': './js/angular/lib/rxjs',

        '@angular/common': './js/angular/lib/@angular/common/bundles/common.umd.js',
        '@angular/compiler': './js/angular/lib/@angular/compiler/bundles/compiler.umd.js',
        '@angular/core': './js/angular/lib/@angular/core/bundles/core.umd.js',
        '@angular/http': './js/angular/lib/@angular/http/bundles/http.umd.js',
        '@angular/platform-browser': './js/angular/lib/@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': './js/angular/lib/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        '@angular/router': './js/angular/lib/@angular/router/bundles/router.umd.js',
    };
    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': { main: 'boot.js', defaultExtension: 'js' },
        'rxjs': { defaultExtension: 'js' }
    };
    var packageNames = [
        '@angular/common',
        '@angular/compiler',
        '@angular/core',
        '@angular/http',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic',
        '@angular/router',
        '@angular/router-deprecated',
        '@angular/testing',
        '@angular/upgrade'
    ];
    var config = {
        map: map,
        packages: packages
    };
    // filterSystemConfig - index.html's chance to modify config before we register it.
    if (global.filterSystemConfig) {
        global.filterSystemConfig(config);
    }
    System.config(config);
})(this);
//# sourceMappingURL=systemjs.config.js.map