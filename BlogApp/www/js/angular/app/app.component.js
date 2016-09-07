"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var core_2 = require('@angular/core');
var core_3 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent(changeDetector, zone) {
        this.changeDetector = changeDetector;
        this.zone = zone;
        this.feed = [];
        addEventListener("mfpready", function () {
            this.getMFBlogFeed();
        }.bind(this, false), true);
    }
    AppComponent.prototype.getMFBlogFeed = function () {
        var request = new WLResourceRequest('/adapters/MFRSSAdapter/getFeed', "GET");
        var that = this;
        request.send().then(function (response) {
            that.feed = response.responseJSON["rss"].channel.item;
            that.changeDetector.markForCheck();
            console.log(that.feed);
            that.zone.run(function () { return function () { }; });
        }, function (error) {
            //alert ("error while trying to call adapter");
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <!-- Page Content -->\n    <nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n        <div class=\"container\">\n            <!-- Brand and toggle get grouped for better mobile display -->\n            <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n                        <span class=\"sr-only\">Toggle navigation</span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>     \n                    </button>\n                <a class=\"navbar-brand\" href=\"#\">MobileFirst Blog</a>\n            </div>\n        </div> \n    </nav>\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <!-- Blog Entries Column -->\n            <div class=\"col-md-8\">\n                <ul>\n                    <li *ngFor=\"let entry of feed\">\n                        <h2>\n                            <a href=\"#\">{{ entry.title }}</a>\n                        </h2>\n                        <p class=\"lead\">\n                            by <a href=\"#\">{{ entry.creator }}</a>\n                        </p>\n                        <p><span class=\"glyphicon glyphicon-time\"></span> Posted on {{ entry.pubDate }}</p>\n                        <p>{{ entry.description }}</p>\n                        <a class=\"btn btn-primary\" href=\"{{ entry.link }}\" target=\"_blank\">Read More <span class=\"glyphicon glyphicon-chevron-right\"></span></a>\n\n                        <hr>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n  ",
        }), 
        __metadata('design:paramtypes', [core_2.ChangeDetectorRef, core_3.NgZone])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyxxQkFBZ0MsZUFDaEMsQ0FBQyxDQUQ4QztBQUMvQyxxQkFBbUMsZUFBZSxDQUFDLENBQUE7QUE4Q25EO0lBR0Usc0JBQW9CLGNBQWlDLEVBQVUsSUFBWTtRQUF2RCxtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFRO1FBRjNFLFNBQUksR0FBRyxFQUFFLENBQUM7UUFHUixnQkFBZ0IsQ0FBRSxVQUFVLEVBQUM7WUFDM0IsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO1FBQ3RCLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQzNCLENBQUM7SUFFRCxvQ0FBYSxHQUFiO1FBQ0UsSUFBSSxPQUFPLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQyxnQ0FBZ0MsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM3RSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FDakIsVUFBVSxRQUFRO1lBQ2hCLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQ3RELElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBSyxPQUFBLGNBQVcsQ0FBQyxFQUFaLENBQVksQ0FBQyxDQUFDO1FBQ25DLENBQUMsRUFFRCxVQUFVLEtBQUs7WUFDYiwrQ0FBK0M7UUFDakQsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBcEVIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSx5dURBdUNUO1NBQ0YsQ0FBQzs7b0JBQUE7SUE0QkYsbUJBQUM7QUFBRCxDQTFCQSxBQTBCQyxJQUFBO0FBMUJZLG9CQUFZLGVBMEJ4QixDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8IS0tIFBhZ2UgQ29udGVudCAtLT5cbiAgICA8bmF2IGNsYXNzPVwibmF2YmFyIG5hdmJhci1pbnZlcnNlIG5hdmJhci1maXhlZC10b3BcIiByb2xlPVwibmF2aWdhdGlvblwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8IS0tIEJyYW5kIGFuZCB0b2dnbGUgZ2V0IGdyb3VwZWQgZm9yIGJldHRlciBtb2JpbGUgZGlzcGxheSAtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXZiYXItaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJuYXZiYXItdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI2JzLWV4YW1wbGUtbmF2YmFyLWNvbGxhcHNlLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWJhclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1iYXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tYmFyXCI+PC9zcGFuPiAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIiNcIj5Nb2JpbGVGaXJzdCBCbG9nPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PiBcbiAgICA8L25hdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPCEtLSBCbG9nIEVudHJpZXMgQ29sdW1uIC0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC04XCI+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGVudHJ5IG9mIGZlZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPnt7IGVudHJ5LnRpdGxlIH19PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibGVhZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ5IDxhIGhyZWY9XCIjXCI+e3sgZW50cnkuY3JlYXRvciB9fTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi10aW1lXCI+PC9zcGFuPiBQb3N0ZWQgb24ge3sgZW50cnkucHViRGF0ZSB9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt7IGVudHJ5LmRlc2NyaXB0aW9uIH19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBocmVmPVwie3sgZW50cnkubGluayB9fVwiIHRhcmdldD1cIl9ibGFua1wiPlJlYWQgTW9yZSA8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi1yaWdodFwiPjwvc3Bhbj48L2E+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxocj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxufSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7IFxuICBmZWVkID0gW107ICBcbiAgXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIHpvbmU6IE5nWm9uZSkge1xuICAgIGFkZEV2ZW50TGlzdGVuZXIgKFwibWZwcmVhZHlcIixmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLmdldE1GQmxvZ0ZlZWQoKVxuICAgIH0uYmluZCh0aGlzLGZhbHNlKSwgdHJ1ZSlcbiAgfVxuXG4gIGdldE1GQmxvZ0ZlZWQgKCkgeyAgIFxuICAgIHZhciByZXF1ZXN0ID0gbmV3IFdMUmVzb3VyY2VSZXF1ZXN0KCcvYWRhcHRlcnMvTUZSU1NBZGFwdGVyL2dldEZlZWQnLCBcIkdFVFwiKTtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgcmVxdWVzdC5zZW5kKCkudGhlbihcbiAgICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICB0aGF0LmZlZWQgPSByZXNwb25zZS5yZXNwb25zZUpTT05bXCJyc3NcIl0uY2hhbm5lbC5pdGVtO1xuICAgICAgICB0aGF0LmNoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICBjb25zb2xlLmxvZyAodGhhdC5mZWVkKTtcbiAgICAgICAgdGhhdC56b25lLnJ1bigoKT0+IGZ1bmN0aW9uKCl7fSk7XG4gICAgICB9LFxuXG4gICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgLy9hbGVydCAoXCJlcnJvciB3aGlsZSB0cnlpbmcgdG8gY2FsbCBhZGFwdGVyXCIpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
