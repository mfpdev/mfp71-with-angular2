(function (global) {
    // map tells the System loader where to look for things
    var map = {
        'app': './js/angular/app',
        'rxjs': './js/angular/lib/rxjs',
        '@angular/common': './js/angular/lib/@angular/common/common.umd.js',
        '@angular/compiler': './js/angular/lib/@angular/compiler/compiler.umd.js',
        '@angular/core': './js/angular/lib/@angular/core/core.umd.js',
        '@angular/http': './js/angular/lib/@angular/http/http.umd.js',
        '@angular/platform-browser': './js/angular/lib/@angular/platform-browser/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': './js/angular/lib/@angular/platform-browser-dynamic/platform-browser-dynamic.umd.js',
        '@angular/router': './js/angular/lib/@angular/router/router.umd.js',
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN5c3RlbWpzLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxDQUFDLFVBQVUsTUFBTTtJQUNiLHVEQUF1RDtJQUN2RCxJQUFJLEdBQUcsR0FBRztRQUNOLEtBQUssRUFBRSxrQkFBa0I7UUFDekIsTUFBTSxFQUFFLHVCQUF1QjtRQUUvQixpQkFBaUIsRUFBRSxnREFBZ0Q7UUFDbkUsbUJBQW1CLEVBQUUsb0RBQW9EO1FBQ3pFLGVBQWUsRUFBRSw0Q0FBNEM7UUFDN0QsZUFBZSxFQUFFLDRDQUE0QztRQUM3RCwyQkFBMkIsRUFBRSxvRUFBb0U7UUFDakcsbUNBQW1DLEVBQUUsb0ZBQW9GO1FBQ3pILGlCQUFpQixFQUFFLGdEQUFnRDtLQUN0RSxDQUFDO0lBQ0Ysb0ZBQW9GO0lBQ3BGLElBQUksUUFBUSxHQUFHO1FBQ1gsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUU7UUFDbEQsTUFBTSxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFO0tBQ3JDLENBQUM7SUFDRixJQUFJLFlBQVksR0FBRztRQUNmLGlCQUFpQjtRQUNqQixtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLGVBQWU7UUFDZiwyQkFBMkI7UUFDM0IsbUNBQW1DO1FBQ25DLGlCQUFpQjtRQUNqQiw0QkFBNEI7UUFDNUIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtLQUNyQixDQUFDO0lBQ0YsSUFBSSxNQUFNLEdBQUc7UUFDVCxHQUFHLEVBQUUsR0FBRztRQUNSLFFBQVEsRUFBRSxRQUFRO0tBQ3JCLENBQUM7SUFDRixtRkFBbUY7SUFDbkYsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztRQUM1QixNQUFNLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNELE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDMUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDVCwyQ0FBMkMiLCJmaWxlIjoic3lzdGVtanMuY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIChnbG9iYWwpIHtcbiAgICAvLyBtYXAgdGVsbHMgdGhlIFN5c3RlbSBsb2FkZXIgd2hlcmUgdG8gbG9vayBmb3IgdGhpbmdzXG4gICAgdmFyIG1hcCA9IHtcbiAgICAgICAgJ2FwcCc6ICcuL2pzL2FuZ3VsYXIvYXBwJyxcbiAgICAgICAgJ3J4anMnOiAnLi9qcy9hbmd1bGFyL2xpYi9yeGpzJyxcblxuICAgICAgICAnQGFuZ3VsYXIvY29tbW9uJzogJy4vanMvYW5ndWxhci9saWIvQGFuZ3VsYXIvY29tbW9uL2NvbW1vbi51bWQuanMnLFxuICAgICAgICAnQGFuZ3VsYXIvY29tcGlsZXInOiAnLi9qcy9hbmd1bGFyL2xpYi9AYW5ndWxhci9jb21waWxlci9jb21waWxlci51bWQuanMnLFxuICAgICAgICAnQGFuZ3VsYXIvY29yZSc6ICcuL2pzL2FuZ3VsYXIvbGliL0Bhbmd1bGFyL2NvcmUvY29yZS51bWQuanMnLFxuICAgICAgICAnQGFuZ3VsYXIvaHR0cCc6ICcuL2pzL2FuZ3VsYXIvbGliL0Bhbmd1bGFyL2h0dHAvaHR0cC51bWQuanMnLFxuICAgICAgICAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic6ICcuL2pzL2FuZ3VsYXIvbGliL0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvcGxhdGZvcm0tYnJvd3Nlci51bWQuanMnLFxuICAgICAgICAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJzogJy4vanMvYW5ndWxhci9saWIvQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYy51bWQuanMnLFxuICAgICAgICAnQGFuZ3VsYXIvcm91dGVyJzogJy4vanMvYW5ndWxhci9saWIvQGFuZ3VsYXIvcm91dGVyL3JvdXRlci51bWQuanMnLFxuICAgIH07XG4gICAgLy8gcGFja2FnZXMgdGVsbHMgdGhlIFN5c3RlbSBsb2FkZXIgaG93IHRvIGxvYWQgd2hlbiBubyBmaWxlbmFtZSBhbmQvb3Igbm8gZXh0ZW5zaW9uXG4gICAgdmFyIHBhY2thZ2VzID0ge1xuICAgICAgICAnYXBwJzogeyBtYWluOiAnYm9vdC5qcycsIGRlZmF1bHRFeHRlbnNpb246ICdqcycgfSxcbiAgICAgICAgJ3J4anMnOiB7IGRlZmF1bHRFeHRlbnNpb246ICdqcycgfVxuICAgIH07XG4gICAgdmFyIHBhY2thZ2VOYW1lcyA9IFtcbiAgICAgICAgJ0Bhbmd1bGFyL2NvbW1vbicsXG4gICAgICAgICdAYW5ndWxhci9jb21waWxlcicsXG4gICAgICAgICdAYW5ndWxhci9jb3JlJyxcbiAgICAgICAgJ0Bhbmd1bGFyL2h0dHAnLFxuICAgICAgICAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlcicsXG4gICAgICAgICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnLFxuICAgICAgICAnQGFuZ3VsYXIvcm91dGVyJyxcbiAgICAgICAgJ0Bhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkJyxcbiAgICAgICAgJ0Bhbmd1bGFyL3Rlc3RpbmcnLFxuICAgICAgICAnQGFuZ3VsYXIvdXBncmFkZSdcbiAgICBdO1xuICAgIHZhciBjb25maWcgPSB7XG4gICAgICAgIG1hcDogbWFwLFxuICAgICAgICBwYWNrYWdlczogcGFja2FnZXNcbiAgICB9O1xuICAgIC8vIGZpbHRlclN5c3RlbUNvbmZpZyAtIGluZGV4Lmh0bWwncyBjaGFuY2UgdG8gbW9kaWZ5IGNvbmZpZyBiZWZvcmUgd2UgcmVnaXN0ZXIgaXQuXG4gICAgaWYgKGdsb2JhbC5maWx0ZXJTeXN0ZW1Db25maWcpIHtcbiAgICAgICAgZ2xvYmFsLmZpbHRlclN5c3RlbUNvbmZpZyhjb25maWcpO1xuICAgIH1cbiAgICBTeXN0ZW0uY29uZmlnKGNvbmZpZyk7XG59KSh0aGlzKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN5c3RlbWpzLmNvbmZpZy5qcy5tYXAiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
